import {
  CreateCustomerVariables,
  GetListUsersVariables,
  GetUserVariables,
  RemoveUserVariables,
  UpdateUserVariables,
} from 'graphql/generated/graphql';
import { getSDK } from 'services/graphql-caller';

export const getListUsers = async (variables?: GetListUsersVariables) => {
  const sdk = getSDK(true);
  return sdk.getListUsers(variables);
};
export const removeUser = async (variables: RemoveUserVariables) => {
  const sdk = getSDK(true);
  return sdk.removeUser(variables);
};
export const getUser = async (variables: GetUserVariables) => {
  const sdk = getSDK(true);
  return sdk.getUser(variables);
};
export const updateUser = async (variables: UpdateUserVariables) => {
  const sdk = getSDK(true);
  return sdk.updateUser(variables);
};
export const createUser = async (variables: CreateCustomerVariables) => {
  const sdk = getSDK(true);
  return sdk.createCustomer(variables);
};
