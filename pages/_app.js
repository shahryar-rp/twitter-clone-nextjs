import Sidebar from '../components/Sidebar';
import Extra from '../components/Extra';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div style={{ backgroundColor: '#15202B' }}>
      <div className='container overflow-hidden flex bg-purple-800 mx-auto '>
        <Sidebar />
        <Component {...pageProps} />
        <Extra />
      </div>
    </div>
  );
}

export default MyApp;
