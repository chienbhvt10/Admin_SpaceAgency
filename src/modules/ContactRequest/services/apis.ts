import { GetListRequestVariables, GetTotalCountVariables } from 'graphql/generated/graphql';
import { getSDK } from 'services/graphql-caller';

export const getListRequest = async (variables?: GetListRequestVariables) => {
  const sdk = getSDK(true);
  return sdk.getListRequest(variables);
};
export const getTotalRequest = async (variables: GetTotalCountVariables) => {
  const sdk = getSDK(true);
  return sdk.getTotalCount(variables);
};
