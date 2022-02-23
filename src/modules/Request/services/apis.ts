import {
  GetListRequestVariables,
  GetRequestVariables,
  GetTotalCountVariables,
  RemoveRequestVariables,
  UpdateRequestStatusVariables,
} from 'graphql/generated/graphql';
import { getSDK } from 'services/graphql-caller';

export const getListRequest = async (variables?: GetListRequestVariables) => {
  const sdk = getSDK(true);
  return sdk.getListRequest(variables);
};
export const getRequest = async (variables: GetRequestVariables) => {
  const sdk = getSDK(true);
  return sdk.getRequest(variables);
};
export const getTotalRequest = async (variables: GetTotalCountVariables) => {
  const sdk = getSDK(true);
  return sdk.getTotalCount(variables);
};
export const updateRequestStatus = async (variables: UpdateRequestStatusVariables) => {
  const sdk = getSDK(true);
  return sdk.updateRequestStatus(variables);
};
export const removeRequest = async (variables: RemoveRequestVariables) => {
  const sdk = getSDK(true);
  return sdk.removeRequest(variables);
};
