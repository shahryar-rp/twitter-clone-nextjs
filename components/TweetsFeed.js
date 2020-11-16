import React from 'react';
import Tweet from './Tweet';

const TweetsFeed = () => {
  return (
    <div className='overflow-hidden'>
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
    </div>
  );
};

export default TweetsFeed;
