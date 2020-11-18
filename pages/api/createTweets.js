import { request, gql } from 'graphql-request';
import { client } from '../../utils/graphql-client';

export default async function handler(req, res) {
  const { tweet } = req.body;

  if (req.method !== 'POST') {
    return res.status(405).json({ msg: 'Method not allowed' });
  }

  req.statusCode = 200;
}
