import env from 'env';
import { GraphQLClient } from 'graphql-request';
import { getSdk } from 'graphql/generated/graphql';

const endpoint = env.apiEndPoint;

const getAuthToken = () => {
  const data = localStorage.getItem(env.tokenKey);
  if (data) {
    try {
      return JSON.parse(data).token;
    } catch (error) {
      return null;
    }
  }
  return null;
};

export const getClient = (auth = true, signal?: AbortSignal) => {
  const headers: any = {};

  if (auth) {
    headers.authorization = auth ? getAuthToken() : undefined;
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
