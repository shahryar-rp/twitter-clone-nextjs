import Link from 'next/link';
import { useForm } from 'react-hook-form';
import useRegisterUser from '../hooks/useRegisterUser';

export default function Login() {
  const { register, handleSubmit, errors, reset } = useForm();
  const { mutate } = useRegisterUser();
  const onSubmit = (data) => {
    mutate(data);
    reset();
  };

  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-transparent px-6 py-8 rounded shadow-md text-black w-full border-gray-500 border-opacity-25 border-2">
          <h1 className="mb-8 text-3xl text-center text-white">Sign up</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="name"
              placeholder="Full Name"
              ref={register({ required: true })}
            />
            {errors.fullname && (
              <span className="text-red-500">Fullname is required</span>
            )}
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
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="username"
              placeholder="Username"
              ref={register({ required: true })}
            />
            {errors.username && (
              <span className="text-red-500">Username is required</span>
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
              Create Account
            </button>
          </form>
          <div className="text-center text-sm text-grey-dark mt-4 text-gray-500">
            By signing up, you agree to the
            <a className="border-grey-dark text-grey-dark text-blue-500 cursor-pointer hover:text-blue-300">
              {' '}
              Terms of Service
            </a>{' '}
            and
            <span className="border-grey-dark text-grey-dark text-blue-500 cursor-pointer hover:text-blue-300">
              {' '}
              Privacy Policy
            </span>
          </div>
        </div>

        <div className="text-grey-dark mt-6">
          Already have an account?{' '}
          <Link href="/login">
            <a
              className="border-blue text-blue hover:text-blue-500"
              href="../login/"
            >
              Log in
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

Login.headerTitle = 'Sign Up';
