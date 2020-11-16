import Head from 'next/head';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Extra from '../components/Extra';
import { Component } from 'react';

export default function Home() {
  return (
    <div className='w-2/3'>
      <Head>
        <title>Twitter Clone</title>
      </Head>
      <main
        className='w-full border-solid border-l border-gray-500 border-opacity-25'
        style={{ backgroundColor: '#15202B' }}
      >
        <div className='font-bold py-3 px-2 text-white border-solid border-b-2 border-gray-500 border-opacity-25'>
          <h1>Home</h1>
        </div>
        <Feed />
      </main>
    </div>
  );
}
