import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

export default function useCreateTweets() {
  const queryClient = useQueryClient;
  return useMutation(
    (values) => axios.post('api/createTweets', values).then((res) => res.data),
    {
      onMutate: async (newTweet) => {
        await queryClient.cancelQueries('tweets');

        const oldTweets = queryClient.getQueryData('tweets');

        const formattedTweet = {
          data: newTweet,
          ref: {
            '@ref': {
              id: Math.floor(Math.random() * 20),
            },
          },
          ts: Math.floor(Math.random() * 65),
        };

        queryClient.setQueryData('tweets', () => [
          formattedTweet,
          ...oldTweets,
        ]);

        return oldTweets;
      },
      onError: (err, variables, oldTweets) =>
        queryClient.setQueryData('tweets', oldTweets),
      onSettled: () => {
        queryClient.invalidateQueries('tweets');
      },
    }
  );
}
