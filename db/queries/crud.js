/* eslint-disable no-return-await */
import { faunaClient, query } from '../fauna-auth';

const {
  Collection,
  Create,
  Now,
  Delete,
  Map: Mp,
  Paginate,
  Index,
  Match,
  Ref,
  Get,
  Update,
  Var,
  Lambda,
} = query;

export const createTweet = async (tweet) =>
  await faunaClient.query(
    Create(Collection('Tweets'), {
      data: {
        tweet,
        created: Now(),
      },
    })
  );

export const getTweets = async () =>
  await faunaClient.query(
    Mp(
      Paginate(Match(Index('all_tweets'))),
      Lambda(['time', 'tweet', 'ref'], Get(Var('ref')))
    )
  );

export const deleteTweet = async (id) => {
  await faunaClient.query(Delete(Ref(Collection('Tweets'), id)));
};

module.exports = {
  createTweet,
  getTweets,
  deleteTweet,
};
