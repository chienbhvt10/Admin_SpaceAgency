import { AppError } from 'commons/type';
import { DetailSimulationVariables, ISimulation } from 'graphql/generated/graphql';
export const DETAIL_SIMULATION = 'DETAIL_SIMULATION';
export const DETAIL_SIMULATION_SUCCESS = 'DETAIL_SIMULATION_SUCCESS';
export const DETAIL_SIMULATION_ERROR = 'DETAIL_SIMULATION_ERROR';

export interface DetailSimulationState {
  loading: boolean;
  dataSimulation?: ISimulation;
}

export interface DetailSimulationAction {
  type: typeof DETAIL_SIMULATION;
  payload: DetailSimulationVariables;
}

export interface DetailSimulationActionSuccess {
  type: typeof DETAIL_SIMULATION_SUCCESS;
  payload: ISimulation;
}

export interface DetailSimulationActionError {
  type: typeof DETAIL_SIMULATION_ERROR;
  payload: AppError;
}
export type DetailSimulationActionTypes =
  | DetailSimulationAction
  | DetailSimulationActionSuccess
  | DetailSimulationActionError;
