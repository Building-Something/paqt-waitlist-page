const { MongoClient } = require('mongodb');

const DB_NAME = process.env.DB_NAME || 'paqt';

function normalizeCluster(raw) {
  let value = (raw || '').trim();
  if (!value) return '';
  if (value.includes('://')) {
    try { value = new URL(value).hostname; } catch { return ''; }
  }
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

let cachedClient = null;

async function getDb() {
  const uri = buildUri();
  if (!uri) throw new Error('MongoDB not configured');
  if (cachedClient) return cachedClient.db(DB_NAME);
  const client = new MongoClient(uri, { serverSelectionTimeoutMS: 8000 });
  await client.connect();
  const db = client.db(DB_NAME);
  await db.collection('waitlist').createIndex({ email: 1 }, { unique: true });
  cachedClient = client;
  return db;
}

const respond = (statusCode, body) => ({
  statusCode,
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
});

exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: '',
    };
  }
  if (event.httpMethod !== 'POST') {
    return respond(405, { success: false, message: 'Method not allowed' });
  }

  try {
    const { name, email, company } = JSON.parse(event.body || '{}');

    if (!name || typeof name !== 'string' || !name.trim()) {
      return respond(400, { success: false, message: 'Please enter your name.' });
    }
    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return respond(400, { success: false, message: 'Please enter a valid email address.' });
    }

    const db = await getDb();
    const waitlist = db.collection('waitlist');
    const cleanEmail = email.trim().toLowerCase();

    if (await waitlist.findOne({ email: cleanEmail })) {
      return respond(409, { success: false, message: "You're already registered on the waitlist!" });
    }

    await waitlist.insertOne({
      name: name.trim(),
      email: cleanEmail,
      company: typeof company === 'string' ? company.trim() : '',
      createdAt: new Date(),
    });

    return respond(201, { success: true, message: 'Successfully added to waitlist' });
  } catch (err) {
    console.error('[Paqt API] Error saving signup:', err);
    return respond(500, { success: false, message: 'Something went wrong. Please try again.' });
  }
};