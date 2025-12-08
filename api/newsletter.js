import connectToDatabase from './db.js';
import Subscriber from './models/Subscriber.js';

export default async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ message: 'Valid email is required' });
  }

  try {
    // 1. Connect to Database
    await connectToDatabase();

    // 2. Create new subscriber
    // This will throw an error if the email already exists (because of unique: true)
    await Subscriber.create({ email });

    return res.status(201).json({ message: 'Successfully subscribed!' });

  } catch (error) {
    console.error('Newsletter Error:', error);

    // Check for duplicate email error (MongoDB error code 11000)
    if (error.code === 11000) {
      return res.status(409).json({ message: 'You are already subscribed.' });
    }

    return res.status(500).json({ message: 'Internal Server Error' });
  }
}