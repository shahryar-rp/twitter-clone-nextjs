import { GraphQLClient } from 'graphql-request';

const endpoint = 'https://graphql.fauna.com/graphql';
const secret = process.env.FAUNA_SECRET_KEY;

export const client = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${secret}`,
  },
});
