import { useQuery } from 'react-query';
import axios from 'axios';

function useTweets() {
  return useQuery('tweets', () =>
    axios.get('api/tweets').then((res) => res.data.data)
  );
}
export default useTweets;
