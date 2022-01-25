import { AppError } from 'commons/type';
import { ISimulation, RemoveSimulationVariables } from 'graphql/generated/graphql';
import {
  RemoveSimulationActionTypes,
  REMOVE_SIMULATION,
  REMOVE_SIMULATION_ERROR,
  REMOVE_SIMULATION_SUCCESS,
} from '../action-types';

export const actionRemoveSimulation = (payload: RemoveSimulationVariables): RemoveSimulationActionTypes => ({
  type: REMOVE_SIMULATION,
  payload,
});

export const actionRemoveSimulationError = (payload: AppError): RemoveSimulationActionTypes => ({
  type: REMOVE_SIMULATION_ERROR,
  payload,
});

export const actionRemoveSimulationSuccess = (payload: ISimulation): RemoveSimulationActionTypes => ({
  type: REMOVE_SIMULATION_SUCCESS,
  payload,
});
