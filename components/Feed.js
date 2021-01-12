import NewTweet from './NewTweet';
import TweetsFeed from './TweetsFeed';
import Login from './Login';
import useAuthUser from '../hooks/useAuthUser';

const Feeds = () => {
  const { data: userData } = useAuthUser();
  console.log(userData);
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
