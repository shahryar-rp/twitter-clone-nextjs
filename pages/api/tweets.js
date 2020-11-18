import { request, gql } from 'graphql-request';
import { client } from '../../utils/Fuana';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405);
  }

  const query = gql`
    query {
      allTweets {
        data {
          _id
          _ts
          author {
            _id
            name
            username
          }
          content
        }
      }
    }
  `;

  const data = await client.request(query);
  const formattedData = data.allTweets.data.sort((x, y) => y._ts - x._ts);

  res.statusCode = 200;
  res.json(formattedData);
}
