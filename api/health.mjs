import { MongoClient } from 'mongodb';

const DB_NAME = process.env.DB_NAME || 'paqt';

function normalizeCluster(raw) {
  let value = (raw || '').trim();
  if (!value) return '';
  if (value.includes('://')) {
    try {
      value = new URL(value).hostname;
    } catch {
      return '';
    }
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

export default async function handler(_req, res) {
  try {
    await getDb();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ ok: true, db: DB_NAME }));
  } catch (err) {
    res.writeHead(503, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ ok: false, error: err.message }));
  }
}