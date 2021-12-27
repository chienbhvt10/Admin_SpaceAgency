import { GetAllUserVariables } from 'graphql/generated/graphql';
import { getSDK } from 'services/graphql-caller';

export const getUserApi = async () => {
  const sdk = getSDK(true);
  return sdk.me();
};
export const getAllUserApi = async (variables?: GetAllUserVariables) => {
  const sdk = getSDK(true);
  return sdk.getAllUser(variables);
};
