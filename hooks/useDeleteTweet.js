import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

export default function useDeleteTodo() {
  const queryClient = useQueryClient();
  return useMutation(
    async (id) => axios.delete(`api/deleteTweet/${id}`).then((res) => res.data),
    {
      onSettled: () => {
        queryClient.invalidateQueries('tweets');
      },
    }
  );
}
