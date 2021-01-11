import Head from 'next/head';
import NewTweet from './NewTweet';
import TweetsFeed from './TweetsFeed';
import Login from './Login';

const Feeds = () => {
  return (
    <div>
      <div>
        <Login />
        <NewTweet />
        <TweetsFeed />
      </div>
    </div>
  );
};

export default Feeds;
