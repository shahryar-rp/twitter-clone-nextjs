import React from 'react';
import { useForm } from 'react-hook-form';
import useCreateTweets from '../hooks/useCreateTweet';

const NewTweet = () => {
  const { register, handleSubmit, watch, errors, reset } = useForm();
  const [createTweet] = useCreateTweets();

  const onSubmit = (data) => {
    createTweet(data);
    reset();
  };

  return (
    <div className='border-solid border-b-8 border-gray-500 border-opacity-25 text-black'>
      <div className='mb-2 m-2'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <textarea
            name='tweet'
            placeholder='what is in your mind...?'
            className='w-full rounded-md h-20 p-2'
            ref={register({ required: true })}
          />
          <div className='flex flex-row justify-end'>
            <button type='submit' className='rounded-lg bg-blue-400 px-3 py-1 '>
              Tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewTweet;
