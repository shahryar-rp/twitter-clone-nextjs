import { createTweet } from '../../db/queries/crud';

export default async function handler(req, res) {
  const { tweet } = req.body;

  if (req.method !== 'POST') {
    return res.status(405).json({ msg: 'Method not allowed' });
  }

  try {
    const createdTweet = await createTweet(tweet);

    return res.status(200).json(createdTweet);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
  req.statusCode = 200;
}
