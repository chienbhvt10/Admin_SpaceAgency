import { GetListSimulationsVariables, GetTotalCountVariables } from 'graphql/generated/graphql';
import { getSDK } from 'services/graphql-caller';

export const getListSimulations = async (variables?: GetListSimulationsVariables) => {
  const sdk = getSDK(true);
  return sdk.getListSimulations(variables);
};
export const getTotalSimulations = async (variables: GetTotalCountVariables) => {
  const sdk = getSDK(true);
  return sdk.getTotalCount(variables);
};
