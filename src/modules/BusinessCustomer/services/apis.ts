import {
  GetListBusinessCustomersVariables,
  GetTotalCountVariables,
  RemoveBusinessCustomerVariables,
} from 'graphql/generated/graphql';
import { getSDK } from 'services/graphql-caller';

export const getListBusinessCustomers = async (variables?: GetListBusinessCustomersVariables) => {
  const sdk = getSDK(true);
  return sdk.getListBusinessCustomers(variables);
};

export const getTotalBusinessCustomer = async (variables: GetTotalCountVariables) => {
  const sdk = getSDK(true);
  return sdk.getTotalCount(variables);
};
export const removeBusinessCustomer = async (variables: RemoveBusinessCustomerVariables) => {
  const sdk = getSDK(true);
  return sdk.removeBusinessCustomer(variables);
};
