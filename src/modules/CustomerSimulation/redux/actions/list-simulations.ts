import { AppError } from 'commons/type';
import { GetListThemesVariables } from 'graphql/generated/graphql';
import {
  LIST_SIMULATION,
  LIST_SIMULATION_ERROR,
  LIST_SIMULATION_SUCCESS,
  SimulationsActionTypes,
  SimulationsData,
} from '../action-types';

export const actionSimulations = (payload: GetListThemesVariables): SimulationsActionTypes => ({
  type: LIST_SIMULATION,
  payload,
});

export const actionSimulationsError = (payload: AppError): SimulationsActionTypes => ({
  type: LIST_SIMULATION_ERROR,
  payload,
});

export const actionSimulationsSuccess = (payload: SimulationsData): SimulationsActionTypes => ({
  type: LIST_SIMULATION_SUCCESS,
  payload,
});
