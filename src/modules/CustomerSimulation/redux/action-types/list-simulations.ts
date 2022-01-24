import { AppError } from 'commons/type';
import { GetListSimulationsVariables, ISimulation, PaginationInput, WhereInput } from 'graphql/generated/graphql';
export const LIST_SIMULATION = 'LIST_SIMULATION';
export const LIST_SIMULATION_SUCCESS = 'LIST_SIMULATION_SUCCESS';
export const LIST_SIMULATION_ERROR = 'LIST_SIMULATION_ERROR';

export interface SimulationsData {
  dataSimulations: ISimulation[];
  pagination?: PaginationInput;
  total?: number;
  where?: WhereInput;
}
export interface SimulationsState {
  loading: boolean;
  pagination: PaginationInput;
  where?: WhereInput;
  total?: number;
  dataSimulations: ISimulation[];
}

export interface SimulationsAction {
  type: typeof LIST_SIMULATION;
  payload: GetListSimulationsVariables;
}

export interface SimulationsActionSuccess {
  type: typeof LIST_SIMULATION_SUCCESS;
  payload: SimulationsData;
}

export interface SimulationsActionError {
  type: typeof LIST_SIMULATION_ERROR;
  payload: AppError;
}
export type SimulationsActionTypes = SimulationsAction | SimulationsActionSuccess | SimulationsActionError;
