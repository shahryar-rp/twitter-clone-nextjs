import useTweets from '../hooks/useTweets';
import Tweet from './Tweet';

const TweetsFeed = () => {
  const data = useTweets();

  const tweets = data.map((tweet) => (
    <Tweet
      name={tweet.author.name}
      username={tweet.author.username}
      content={tweet.content}
    />
  ));
  return <div>{tweets}</div>;
};

export default TweetsFeed;
