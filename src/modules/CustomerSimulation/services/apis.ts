import {
  DetailSimulationVariables,
  GetListSimulationComponentsVariables,
  GetListSimulationsVariables,
  GetTotalCountVariables,
  RemoveSimulationVariables,
} from 'graphql/generated/graphql';
import { getSDK } from 'services/graphql-caller';

export const getListSimulations = async (variables?: GetListSimulationsVariables) => {
  const sdk = getSDK(true);
  return sdk.getListSimulations(variables);
};
export const getListSimulationsComponents = async (variables?: GetListSimulationComponentsVariables) => {
  const sdk = getSDK(true);
  return sdk.getListSimulationComponents(variables);
};
export const removeSimulation = async (variables: RemoveSimulationVariables) => {
  const sdk = getSDK(true);
  return sdk.removeSimulation(variables);
};
export const detailSimulation = async (variables: DetailSimulationVariables) => {
  const sdk = getSDK(true);
  return sdk.detailSimulation(variables);
};
export const getTotalSimulations = async (variables: GetTotalCountVariables) => {
  const sdk = getSDK(true);
  return sdk.getTotalCount(variables);
};
