import { GetListUsersVariables, RemoveUserVariables } from 'graphql/generated/graphql';
import { getSDK } from 'services/graphql-caller';

export const getListUsers = async (variables?: GetListUsersVariables) => {
  const sdk = getSDK(true);
  return sdk.getListUsers(variables);
};
export const removeUser = async (variables: RemoveUserVariables) => {
  const sdk = getSDK(true);
  return sdk.removeUser(variables);
};
