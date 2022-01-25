import { AppError } from 'commons/type';
import { GetUserVariables, ISimulation } from 'graphql/generated/graphql';
import {
  DetailSimulationActionTypes,
  DETAIL_SIMULATION,
  DETAIL_SIMULATION_ERROR,
  DETAIL_SIMULATION_SUCCESS,
} from '../action-types';

export const actionDetailSimulation = (payload: GetUserVariables): DetailSimulationActionTypes => ({
  type: DETAIL_SIMULATION,
  payload,
});

export const actionDetailSimulationError = (payload: AppError): DetailSimulationActionTypes => ({
  type: DETAIL_SIMULATION_ERROR,
  payload,
});

export const actionDetailSimulationSuccess = (payload: ISimulation): DetailSimulationActionTypes => ({
  type: DETAIL_SIMULATION_SUCCESS,
  payload,
});
