import Head from 'next/head';
import Feed from '../components/Feed';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Twitter Clone</title>
      </Head>
      <Feed />
    </div>
  );
}
