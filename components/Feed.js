import Head from 'next/head';
import NewTweet from './NewTweet';
import TweetsFeed from './TweetsFeed';

const Feeds = () => {
  return (
    <div>
      <div>
        <NewTweet />
        <TweetsFeed />
      </div>
    </div>
  );
};

export default Feeds;
