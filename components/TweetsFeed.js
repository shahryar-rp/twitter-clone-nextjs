import useTweets from '../hooks/useTweets';
import Loader from 'react-loader-spinner';
import Tweet from './Tweet';

const TweetsFeed = () => {
  const { data, isLoading, error } = useTweets();

  if (isLoading) {
    return (
      <div className='w-full flex items-center justify-center py-8'>
        <Loader
          type='Oval'
          color='#00BFFF'
          height={50}
          width={50}
          timeout={3000} //3 secs
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className='w-full text-center justify-center py-8'>
        <h4 className='text-red-500'>Can't access tweets feed right now</h4>
        <br />
        <p className='text-red-500'>{`${error}`}</p>
      </div>
    );
  }

  return (
    <div>
      {data.map((tweet) => (
        <Tweet
          key={tweet._id}
          name={tweet.author.name}
          username={tweet.author.username}
          content={tweet.content}
        />
      ))}
    </div>
  );
};

export default TweetsFeed;
