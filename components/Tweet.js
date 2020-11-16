import React from 'react';

const Tweet = () => {
  return (
    <div className='flex border-solid border-gray-500 border-b-2 border-opacity-25'>
      <div className='p-2'>
        <img className='rounded-full' src='/profile.jpg' />
      </div>
      <div className='content p-2 text-white'>
        <div className='flex mb-4'>
          <p className='font-bold mr-2'>Shahryar</p>
          <p className='text-gray-600'>@dizonans</p>
        </div>
        <div className='mb-3'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at sem nec
          mauris condimentum tristique ac eu felis. Sed ac faucibus lacus,
          vestibulum posuere tortor. Nulla ultricies pulvinar leo non semper. Ut
          commodo faucibus auctor. Maecenas ut lectus id libero bibendum
          consectetur tincidunt non eros. Etiam vitae imperdiet mauris. In
          maximus ipsum a porttitor dictum. Nunc vestibulum porta justo a
          pretium. Nulla facilisi. Quisque vel cursus orci. Curabitur eu lectus
          mauris. Aenean ultrices mi nec diam tincidunt dapibus. Praesent sed
          ipsum at diam hendrerit convallis.
        </div>
        <div className='feedback-setion'>
          <button className='px-3 py-1 rounded-lg mr-2 hover:border-solid'>
            Like
          </button>
          <button className='px-3 py-1 rounded-lg'>Comment</button>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
