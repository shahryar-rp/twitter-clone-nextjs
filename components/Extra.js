import Link from 'next/link';
const Extra = () => {
  return (
    <div className='w-1/3 m-4'>
      <div className='fixed'>
        <div className='flex items-center '>
          <SearchIcon className='w-6 text-gray-500 absolute ml-1' />
          <input
            className='px-8 py-2 bg-gray-700 bg-opacity-25 rounded-xl w-full'
            placeholder='Search Twitter'
          />
        </div>
        <div className='border-solid border-gray-500 border-2 rounded-xl border-opacity-25 h-auto p-3 mt-4 bg-gray-700 bg-opacity-25'>
          <h1 className='text-lg font-bold border-b-2 border-solid border-gray-500 border-opacity-25 pb-2'>
            Trends For You
          </h1>
          <div className='mt-3 border-b-2 border-solid border-gray-700 border-opacity-25 pb-2'>
            <p className='text-gray-500 text-sm'>Trending in Europe</p>
            <h4 className='font-bold my-2'>Windows 11</h4>
            <p className='text-gray-500 text-sm'>5,067 Tweets</p>
          </div>
          <div className='mt-3 border-b-2 border-solid border-gray-700 border-opacity-25 pb-2'>
            <p className='text-gray-500 text-sm'>Trending in Europe</p>
            <h4 className='font-bold my-2'>Corona Virus Vaccine</h4>
            <p className='text-gray-500 text-sm'>11,432 Tweets</p>
          </div>
          <div className='mt-3 border-b-2 border-solid border-gray-700 border-opacity-25 pb-2'>
            <p className='text-gray-500 text-sm'>Trending in Europe</p>
            <h4 className='font-bold my-2'>New iPhone Pro Max</h4>
            <p className='text-gray-500 text-sm'>3,254,213 Tweets</p>
          </div>
          <div className='mt-3'>
            <p className='text-gray-500 text-sm'>Trending in Europe</p>
            <h4 className='font-bold my-2'>Linux New Distro</h4>
            <p className='text-gray-500 text-sm'>43 tweets</p>
          </div>
        </div>
        <div>
          <div className='border-solid border-gray-500 border-2 rounded-xl border-opacity-25 h-auto p-3 mt-4 bg-gray-700 bg-opacity-25'>
            <h1 className='text-lg font-bold border-b-2 border-solid border-gray-500 border-opacity-25 pb-2'>
              Who To Follow
            </h1>
            <div className='flex items-center border-b-2 border-solid border-gray-700 border-opacity-25 justify-between'>
              <div className='flex items-center justify-around my-3 mr-6'>
                <img src='/dan.jpg' className='rounded-full w-16' />
                <div className='font-bold ml-2'>
                  <Link href='/'>Dan Abramove</Link>
                  <p className='text-gray-500 font-light'>@dan_abramove</p>
                </div>
              </div>
              <button className='text-blue-500 border-solid border-2 border-blue-500 border-opacity-50 rounded-2xl p-1'>
                Follow
              </button>
            </div>
            <div className='flex items-center border-b-2 border-solid border-gray-700 border-opacity-25 justify-between'>
              <div className='flex items-center justify-around my-3 mr-6'>
                <img src='/ryan.jpg' className='rounded-full w-16' />
                <div className='font-bold ml-2'>
                  <Link href='/'>Ryan Florence</Link>
                  <p className='text-gray-500 font-light'>@ryanflorence</p>
                </div>
              </div>
              <button className='text-blue-500 border-solid border-2 border-blue-500 border-opacity-50 rounded-2xl p-1'>
                Follow
              </button>
            </div>
            <div className='flex items-center border-b-2 border-solid border-gray-700 border-opacity-25 justify-between'>
              <div className='flex items-center justify-around my-3 mr-6'>
                <img src='/react.png' className='rounded-full w-16' />
                <div className='font-bold ml-2'>
                  <Link href='/'>React</Link>
                  <p className='text-gray-500 font-light'>@reactjs</p>
                </div>
              </div>
              <button className='text-blue-500 border-solid border-2 border-blue-500 border-opacity-50 rounded-2xl p-1'>
                Follow
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Extra;

const SearchIcon = ({ className }) => {
  return (
    <svg viewBox='0 0 24 24' className={`fill-current ${className}`}>
      <g>
        <path d='M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z'></path>
      </g>
    </svg>
  );
};

<g>
  <path d='M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z'></path>
</g>;
