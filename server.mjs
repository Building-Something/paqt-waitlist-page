import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { MongoClient } from 'mongodb';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = Number(process.env.PORT || 5000);
const DB_NAME = process.env.DB_NAME || 'paqt';

function normalizeCluster(raw) {
  let value = (raw || '').trim();
  if (!value) return '';
  // Tolerant of a full URL being pasted here (mongodb+srv://user:pass@host/...)
  if (value.includes('://')) {
    try {
      value = new URL(value).hostname;
    } catch {
      return '';
    }
  }
  // Drop any stray port or path/query fragments
  value = value.split('/')[0].split('?')[0];
  if (value.includes(':')) {
    const idx = value.indexOf(':');
    if (idx !== -1) value = value.slice(0, idx);
  }
  return value;
}

function buildMongoUri() {
  // Option 1: full URI provided (maybe with a password already URL-encoded)
  if (process.env.MONGODB_URI) return process.env.MONGODB_URI;

  // Option 2: build from parts so special characters in the password are handled automatically
  const user = process.env.MONGODB_USER;
  const password = process.env.MONGODB_PASSWORD;
  const cluster = normalizeCluster(process.env.MONGODB_CLUSTER);
  if (!user || !cluster) return '';

  const enc = (s) => encodeURIComponent(s);
  const auth = password ? `${enc(user)}:${enc(password)}` : enc(user);
  return `mongodb+srv://${auth}@${cluster}/?retryWrites=true&w=majority&appName=Paqt`;
}

const MONGODB_URI = buildMongoUri();

if (!MONGODB_URI) {
  console.error(
    '\n[Paqt API] MongoDB not configured.\n' +
      'Set these in `.env` (the vite dev server will restart automatically):\n' +
      '  MONGODB_USER=your_db_user\n' +
      '  MONGODB_PASSWORD=your_password_plain_text\n' +
      '  MONGODB_CLUSTER=cluster0.xxxxxx.mongodb.net\n' +
      'or a single MONGODB_URI with the password already URL-encoded.\n'
  );
  process.exit(1);
}

const client = new MongoClient(MONGODB_URI, {
  serverSelectionTimeoutMS: 8000,
});

const app = express();
app.use(cors());
app.use(express.json());

// Serve the built front-end when present (npm run build && node server.mjs)
const distDir = path.join(__dirname, 'dist');
if (fs.existsSync(distDir)) {
  app.use(express.static(distDir));
}

// SPA fallback for the built app (Express 5: regex path, exclude /api)
if (fs.existsSync(distDir)) {
  app.get(/^(?!\/api\/?)/, (_req, res) => {
    res.sendFile(path.join(distDir, 'index.html'));
  });
}

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, db: DB_NAME, connected: client.topology?.isConnected() ?? false });
});

app.post('/api/waitlist', async (req, res) => {
  try {
    const { name, email, company } = req.body || {};

    if (!name || typeof name !== 'string' || !name.trim()) {
      return res.status(400).json({ success: false, message: 'Please enter your name.' });
    }
    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return res.status(400).json({ success: false, message: 'Please enter a valid email address.' });
    }

    const db = client.db(DB_NAME);
    const waitlist = db.collection('waitlist');

    const cleanEmail = email.trim().toLowerCase();

    const existing = await waitlist.findOne({ email: cleanEmail });
    if (existing) {
      return res.status(409).json({ success: false, message: "You're already registered on the waitlist!" });
    }

    await waitlist.insertOne({
      name: name.trim(),
      email: cleanEmail,
      company: typeof company === 'string' ? company.trim() : '',
      createdAt: new Date(),
    });

    return res.status(201).json({ success: true, message: 'Successfully added to waitlist' });
  } catch (err) {
    console.error('[Paqt API] Error saving signup:', err);
    return res.status(500).json({ success: false, message: 'Something went wrong. Please try again.' });
  }
});

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Keep trying to reach MongoDB in the background; only start serving when connected.
// This way fixing `.env` (and saving it) auto-recovers without restarting the process.
async function start() {
  while (true) {
    try {
      await client.connect();
      const waitlist = client.db(DB_NAME).collection('waitlist');
      await waitlist.createIndex({ email: 1 }, { unique: true });
      console.log(`[Paqt API] Connected to MongoDB (db: ${DB_NAME}, collection: waitlist)`);
      break;
    } catch (err) {
      console.error(`[Paqt API] Cannot connect to MongoDB: ${err.message}`);
      console.error(`[Paqt API] Check your MongoDB credentials in .env, retrying in 5s...`);
      await sleep(5000);
    }
  }

  app.listen(PORT, () => {
    console.log(`[Paqt API] Ready on http://localhost:${PORT}`);
  });
}

start();