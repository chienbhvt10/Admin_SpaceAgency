import { getSDK } from 'services/graphql-caller';

export const getUserApi = async () => {
  const sdk = getSDK(true);
  return sdk.me();
};
