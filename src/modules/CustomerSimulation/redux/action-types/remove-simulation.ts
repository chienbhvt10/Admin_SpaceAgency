import { AppError } from 'commons/type';
import { ISimulation, RemoveSimulationVariables } from 'graphql/generated/graphql';
export const REMOVE_SIMULATION = 'REMOVE_SIMULATION';
export const REMOVE_SIMULATION_SUCCESS = 'REMOVE_SIMULATION_SUCCESS';
export const REMOVE_SIMULATION_ERROR = 'REMOVE_SIMULATION_ERROR';

export interface RemoveSimulationState {
  loading: boolean;
  dataRemoveSimulation: undefined;
}

export interface RemoveSimulationAction {
  type: typeof REMOVE_SIMULATION;
  payload: RemoveSimulationVariables;
}

export interface RemoveSimulationActionSuccess {
  type: typeof REMOVE_SIMULATION_SUCCESS;
  payload: ISimulation;
}

export interface RemoveSimulationActionError {
  type: typeof REMOVE_SIMULATION_ERROR;
  payload: AppError;
}
export type RemoveSimulationActionTypes =
  | RemoveSimulationAction
  | RemoveSimulationActionSuccess
  | RemoveSimulationActionError;
