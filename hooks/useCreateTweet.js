import axios from 'axios';
import { useMutation, queryCache } from 'react-query';

export default function useCreateTweets() {
  return useMutation((values) =>
    axios.post('api/createTweets', values).then((res) => res.data)
  );
}
