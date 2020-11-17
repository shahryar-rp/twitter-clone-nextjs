import { GraphQLClient } from 'graphql-request';

const endpoint = 'https://graphql.fauna.com/graphql';

export const client = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer fnAD64KnuNACB8LA7YXoCwoJfKL0ucQsNcXurEoU`,
  },
});
