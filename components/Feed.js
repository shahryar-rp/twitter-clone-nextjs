import React from 'react';
import NewTweet from './NewTweet';
import TweetsFeed from './TweetsFeed';

export default function() {
  return (
    <div>
      <div>
        <NewTweet />
        <TweetsFeed />
      </div>
    </div>
  );
}
