import { MongoClient } from 'mongodb';

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

function buildUri() {
  if (process.env.MONGODB_URI) return process.env.MONGODB_URI;
  const user = process.env.MONGODB_USER;
  const password = process.env.MONGODB_PASSWORD;
  const cluster = normalizeCluster(process.env.MONGODB_CLUSTER);
  if (!user || !cluster) return '';
  const enc = (s) => encodeURIComponent(s);
  const auth = password ? `${enc(user)}:${enc(password)}` : enc(user);
  return `mongodb+srv://${auth}@${cluster}/?retryWrites=true&w=majority&appName=Paqt`;
}

// Cache the Mongo client across warm invocations.
const g = globalThis;
g.__paqtMongoClient = g.__paqtMongoClient || null;

async function getDb() {
  const uri = buildUri();
  if (!uri) throw new Error('MongoDB not configured');
  if (g.__paqtMongoClient) return g.__paqtMongoClient.db(DB_NAME);
  const client = new MongoClient(uri, { serverSelectionTimeoutMS: 8000 });
  await client.connect();
  const db = client.db(DB_NAME);
  await db.collection('waitlist').createIndex({ email: 1 }, { unique: true });
  g.__paqtMongoClient = client;
  return db;
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', (chunk) => {
      data += chunk;
    });
    req.on('end', () => resolve(data));
    req.on('error', reject);
  });
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.writeHead(204, corsHeaders);
    res.end();
    return;
  }

  if (req.method !== 'POST') {
    res.writeHead(405, { 'Content-Type': 'application/json', ...corsHeaders });
    res.end(JSON.stringify({ success: false, message: 'Method not allowed' }));
    return;
  }

  let body = {};
  try {
    const raw = await readBody(req);
    body = raw ? JSON.parse(raw) : {};
  } catch {
    res.writeHead(400, { 'Content-Type': 'application/json', ...corsHeaders });
    res.end(JSON.stringify({ success: false, message: 'Invalid request body.' }));
    return;
  }

  const { name, email, company } = body;

  if (!name || typeof name !== 'string' || !name.trim()) {
    res.writeHead(400, { 'Content-Type': 'application/json', ...corsHeaders });
    res.end(JSON.stringify({ success: false, message: 'Please enter your name.' }));
    return;
  }
  if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    res.writeHead(400, { 'Content-Type': 'application/json', ...corsHeaders });
    res.end(JSON.stringify({ success: false, message: 'Please enter a valid email address.' }));
    return;
  }

  try {
    const db = await getDb();
    const waitlist = db.collection('waitlist');
    const cleanEmail = email.trim().toLowerCase();

    if (await waitlist.findOne({ email: cleanEmail })) {
      res.writeHead(409, { 'Content-Type': 'application/json', ...corsHeaders });
      res.end(JSON.stringify({ success: false, message: "You're already registered on the waitlist!" }));
      return;
    }

    await waitlist.insertOne({
      name: name.trim(),
      email: cleanEmail,
      company: typeof company === 'string' ? company.trim() : '',
      createdAt: new Date(),
    });

    res.writeHead(201, { 'Content-Type': 'application/json', ...corsHeaders });
    res.end(JSON.stringify({ success: true, message: 'Successfully added to waitlist' }));
  } catch (err) {
    console.error('[Paqt API] Error saving signup:', err);
    res.writeHead(500, { 'Content-Type': 'application/json', ...corsHeaders });
    res.end(JSON.stringify({ success: false, message: 'Something went wrong. Please try again.' }));
  }
}