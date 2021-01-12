import Link from 'next/link';
import { useForm } from 'react-hook-form';

import useAuthUser from '../hooks/useAuthUser';

export default function Login() {
  const { register, handleSubmit, errors, reset } = useForm();
  const { mutate, userData } = useAuthUser();
  const onSubmit = (data) => {
    mutate(data);
    reset();
  };

  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-transparent px-6 py-8 rounded shadow-md text-black w-full border-gray-500 border-opacity-25 border-2">
          <h1 className="mb-8 text-3xl text-center text-white">
            Log in to Twitter
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              ref={register({ required: true })}
            />
            {errors.email && (
              <span className="text-red-500">Email is required</span>
            )}

            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
              ref={register({ required: true })}
            />
            {errors.password && (
              <span className="text-red-500">Password is required</span>
            )}
            <button
              type="submit"
              className="w-full text-center py-3 rounded text-white bg-blue-400 hover:bg-blue-500"
            >
              login
            </button>
          </form>
        </div>
        <div className="text-center text-sm text-grey-dark mt-4">
          <div className="text-grey-dark mt-4">
            Don't have an account?{' '}
            <Link href="/signup">
              <a
                className="border-blue text-blue hover:text-blue-500"
                href="../login/"
              >
                Sign Up!
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

Login.headerTitle = 'Login';
