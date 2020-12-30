import React from 'react';
import useDeleteTweet from '../hooks/useDeleteTweet';

const Tweet = ({ name, username, content, id }) => {
  const { mutate } = useDeleteTweet();
  return (
    <div className="flex border-solid border-gray-500 border-b-2 border-opacity-25">
      <div className="p-2 my-1">
        <img className="rounded-full w-16" src="/profile.jpg" alt="profile" />
      </div>
      <div className="content p-2 text-white">
        <div className="flex mb-4">
          <p className="font-bold mr-2">{name}</p>
          <p className="text-gray-600">{`@${username}`}</p>
        </div>
        <div className="mb-3">{content}</div>
        <div className="feedback-setion">
          <button
            className="px-3 py-1 rounded-lg mr-2 hover:border-solid"
            type="button"
          >
            Like
          </button>
          <button className="px-3 py-1 rounded-lg" type="button">
            Comment
          </button>
          <button
            className="px-3 py-1 rounded-lg"
            type="button"
            onClick={async () => await mutate(id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
