/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';
import Sidebar from '../components/Sidebar';
import Extra from '../components/Extra';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import '../styles/globals.css';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ backgroundColor: '#15202B' }}>
        <div className="container flex text-white mx-auto min-h-screen">
          <Sidebar />
          <main className="w-2/3 border-solid border-r-2 border-l-2 border-gray-500 border-opacity-25">
            <div className="font-bold py-3 px-2 text-white border-solid border-b-2 border-gray-500 border-opacity-25 overflo">
              <h1>{Component.headerTitle ? Component.headerTitle : 'Home'}</h1>
            </div>
            <Component {...pageProps} />
          </main>
          <Extra />
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
      </div>
    </QueryClientProvider>
  );
}

export default MyApp;
