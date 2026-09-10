import { getDb } from './mongo.js';

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

export default async (req) => {
  if (req.method !== 'POST') return json({ success: false, message: 'Method not allowed' }, 405);

  try {
    const { name, email, company } = (await req.json()) || {};

    if (!name || typeof name !== 'string' || !name.trim())
      return json({ success: false, message: 'Please enter your name.' }, 400);
    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
      return json({ success: false, message: 'Please enter a valid email address.' }, 400);

    const db = await getDb();
    const waitlist = db.collection('waitlist');
    const cleanEmail = email.trim().toLowerCase();

    if (await waitlist.findOne({ email: cleanEmail }))
      return json({ success: false, message: "You're already registered on the waitlist!" }, 409);

    await waitlist.insertOne({
      name: name.trim(),
      email: cleanEmail,
      company: typeof company === 'string' ? company.trim() : '',
      createdAt: new Date(),
    });

    return json({ success: true, message: 'Successfully added to waitlist' }, 201);
  } catch (err) {
    console.error('[Paqt API] Error saving signup:', err);
    return json({ success: false, message: 'Something went wrong. Please try again.' }, 500);
  }
};
