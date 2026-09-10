import { getDb } from './mongo.js';

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

export default async () => {
  try {
    await getDb();
    return json({ ok: true, db: process.env.DB_NAME || 'paqt' });
  } catch (err) {
    return json({ ok: false, error: err.message }, 503);
  }
};
