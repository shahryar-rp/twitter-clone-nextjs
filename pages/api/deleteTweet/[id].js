import { deleteTweet } from '../../../db/queries/crud';

export default async function handler(req, res) {
  if (req.method !== 'DELETE') {
    return res.status(405).json({ msg: 'Method not allowed' });
  }
  const {
    query: { id },
  } = req;

  try {
    const deleted = await deleteTweet(id);
    return res.status(200).json('deleted');
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Something went wrong.' });
  }
}
