import env from 'env';
import { GraphQLClient } from 'graphql-request';
import { getSdk } from 'graphql/generated/graphql';
import { getAuthLocalData } from 'helpers/token';

const endpoint = env.apiEndPoint;

export const getClient = (auth = true, signal?: AbortSignal) => {
  const accessToken = getAuthLocalData()?.accessToken;
  const headers: any = {};

  if (auth) {
    headers.authorization = auth ? `Bearer ${accessToken}` : undefined;
  }

  const graphQLClient = new GraphQLClient(endpoint, {
    headers,
    signal,
  });

  return graphQLClient;
};

export const getSDK = (auth = true, signal?: AbortSignal) => {
  const client = getClient(auth, signal);
  return getSdk(client);
};
// eslint-disable-next-line
export default {
  getClient,
  getSDK,
};
