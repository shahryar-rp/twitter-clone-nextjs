import { RegisterUser } from '../../../db/queries/auth';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ msg: 'Method not allowed' });
  }
  const { name, email, username, password } = req.body;

  try {
    const registeredUser = await RegisterUser(name, username, email, password);

    return res.status(200).json(registeredUser);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
  req.statusCode = 200;
}
