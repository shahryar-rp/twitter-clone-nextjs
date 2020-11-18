import { useQuery } from 'react-query';
import axios from 'axios';

function useTweets() {
  return useQuery('tweets', async () =>
    axios.get('api/tweets').then((res) => res.data)
  );
}
export default useTweets;
