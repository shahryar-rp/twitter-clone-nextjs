import axios from 'axios';
import { useMutation } from 'react-query';

export default function useAuthUser() {
  return useMutation((values) =>
    axios.post('api/auth/authenticate', values).then((res) => res.data)
  );
}
