import Sidebar from '../components/Sidebar';
import Extra from '../components/Extra';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';

import { ReactQueryDevtools } from 'react-query-devtools';

import '../styles/globals.css';

const queryCache = new QueryCache();

function MyApp({ Component, pageProps }) {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <div style={{ backgroundColor: '#15202B' }}>
        <div className='container flex text-white mx-auto min-h-screen'>
          <Sidebar />
          <main className='w-2/3 border-solid border-r-2 border-l-2 border-gray-500 border-opacity-25'>
            <div className='font-bold py-3 px-2 text-white border-solid border-b-2 border-gray-500 border-opacity-25 overflo'>
              <h1>{Component.headerTitle ? Component.headerTitle : 'Home'}</h1>
            </div>
            <Component {...pageProps} />
          </main>
          <Extra />
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
      </div>
    </ReactQueryCacheProvider>
  );
}

export default MyApp;
