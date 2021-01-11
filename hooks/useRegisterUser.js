import axios from 'axios';
import { useMutation } from 'react-query';

export default function useRegisterUser() {
  return useMutation((values) =>
    axios.post('api/auth/register', values).then((res) => res.data)
  );
}
