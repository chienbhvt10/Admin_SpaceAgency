import {
  CreateUserVariables,
  DeleteUserVariables,
  GetAllUserVariables,
  GetUserVariables,
  UpdateUserVariables,
} from 'graphql/generated/graphql';
import { getSDK } from 'services/graphql-caller';

export const getUserApi = async () => {
  const sdk = getSDK(true);
  return sdk.me();
};
export const getAllUserApi = async (variables?: GetAllUserVariables) => {
  const sdk = getSDK(true);
  return sdk.getAllUser(variables);
};
export const deleteUserApi = async (variables: DeleteUserVariables) => {
  const sdk = getSDK(true);
  return sdk.deleteUser(variables);
};
export const getUserDetailApi = async (variables: GetUserVariables) => {
  const sdk = getSDK(true);
  return sdk.getUser(variables);
};
export const updateUserApi = async (variables: UpdateUserVariables) => {
  const sdk = getSDK(true);
  return sdk.updateUser(variables);
};
export const createUserApi = async (variables: CreateUserVariables) => {
  const sdk = getSDK(true);
  return sdk.createUser(variables);
};
