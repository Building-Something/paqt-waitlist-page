const { MongoClient } = require('mongodb');

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
  const uri = process.env.MONGODB_URI || buildUri();
  if (!uri) throw new Error('MongoDB not configured');
  if (cachedClient) return cachedClient.db(process.env.DB_NAME || 'paqt');
  const client = new MongoClient(uri, { serverSelectionTimeoutMS: 8000 });
  await client.connect();
  const db = client.db(process.env.DB_NAME || 'paqt');
  await db.collection('waitlist').createIndex({ email: 1 }, { unique: true });
  cachedClient = client;
  return db;
}

module.exports = { getDb };
