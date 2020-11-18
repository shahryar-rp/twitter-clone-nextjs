import useTweets from '../hooks/useTweets';
import Loader from 'react-loader-spinner';
import Tweet from './Tweet';

const TweetsFeed = () => {
  const { data, isLoading, error } = useTweets();

  return (
    <div>
      {isLoading ? (
        <div className='w-full flex items-center justify-center py-8'>
          <Loader
            type='Oval'
            color='#00BFFF'
            height={50}
            width={50}
            timeout={3000} //3 secs
          />
        </div>
      ) : (
        data.map((tweet) => (
          <Tweet
            key={tweet._id}
            name={tweet.author.name}
            username={tweet.author.username}
            content={tweet.content}
          />
        ))
      )}
    </div>
  );
};

export default TweetsFeed;
