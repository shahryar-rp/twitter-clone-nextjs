import { request, gql } from 'graphql-request';
import { useQuery } from 'react-query';
import { client } from '../utils/Fuana';

const query = gql`
  query {
    allTweets {
      data {
        _id
        _ts
        author {
          name
          username
        }
        content
      }
    }
  }
`;

function useTweets() {
  const { data } = useQuery('tweets', async () => {
    const data = await client.request(query);

    return data;
  });
  const newData = data.allTweets.data.sort((x, y) => y._ts - x._ts);

  return newData;
}

export default useTweets;
