import Loader from 'react-loader-spinner';

import useTweets from '../hooks/useTweets';
import Tweet from './Tweet';

const TweetsFeed = () => {
  const { data, isLoading } = useTweets();

  console.log(data);
  if (isLoading) {
    return (
      <div className="w-full flex items-center justify-center py-8">
        <Loader
          type="Oval"
          color="#00BFFF"
          height={50}
          width={50}
          timeout={3000} // 3 secs
        />
      </div>
    );
  }

  if (!data.length) {
    return (
      <h2 className="w-full flex items-center justify-center py-8">
        Start tweeting tweety bird ...
      </h2>
    );
  }

  return (
    <div>
      {data.map((tw) => (
        <Tweet
          key={tw.ref['@ref'].id}
          content={tw.data.tweet}
          id={tw.ref['@ref'].id}
        />
      ))}
    </div>
  );
};

export default TweetsFeed;
