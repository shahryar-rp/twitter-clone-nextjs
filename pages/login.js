import { useForm } from 'react-hook-form';
const { register, handleSubmit, watch, errors } = useForm();
const onSubmit = (data) => console.log(data);

export default function Login() {
  return (
    <div>
      <form>
        <div className='bg-grey-lighter min-h-screen flex flex-col'>
          <div className='container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2'>
            <div className='bg-transparent px-6 py-8 rounded shadow-md text-black w-full border-gray-500 border-opacity-25 border-2'>
              <h1 className='mb-8 text-3xl text-center text-white'>Sign up</h1>
              <input
                type='text'
                className='block border border-grey-light w-full p-3 rounded mb-4'
                name='fullname'
                placeholder='Full Name'
              />

              <input
                type='text'
                className='block border border-grey-light w-full p-3 rounded mb-4'
                name='email'
                placeholder='Email'
              />
              <input
                type='text'
                className='block border border-grey-light w-full p-3 rounded mb-4'
                name='fullname'
                placeholder='Username'
              />

              <input
                type='password'
                className='block border border-grey-light w-full p-3 rounded mb-4'
                name='password'
                placeholder='Password'
              />
              <input
                type='password'
                className='block border border-grey-light w-full p-3 rounded mb-4'
                name='confirm_password'
                placeholder='Confirm Password'
              />

              <button
                type='submit'
                className='w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1 hover:text-blue-500'
              >
                Create Account
              </button>

              <div className='text-center text-sm text-grey-dark mt-4 text-gray-500'>
                By signing up, you agree to the
                <a
                  className='no-underline border-b border-grey-dark text-grey-dark hover:text-blue-500'
                  href='#'
                >
                  Terms of Service
                </a>{' '}
                and
                <a
                  className='no-underline border-b border-grey-dark text-grey-dark hover:text-blue-500'
                  href='#'
                >
                  Privacy Policy
                </a>
              </div>
            </div>

            <div className='text-grey-dark mt-6'>
              Already have an account?{' '}
              <a
                className='no-underline border-b border-blue text-blue hover:text-blue-500'
                href='../login/'
              >
                Log in
              </a>
              .
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

Login.headerTitle = 'Login';
