import { Authenticate } from '../../../db/queries/auth';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ msg: 'Method not allowed' });
  }
  const { email, password } = req.body;

  try {
    const loggedInUser = await Authenticate(email, password);

    return res.status(200).json(loggedInUser);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
  req.statusCode = 200;
}
