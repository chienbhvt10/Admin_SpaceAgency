import { DetailSimulation, DetailSimulationVariables, GetStyle } from 'graphql/generated/graphql';
import * as apis from 'modules/CustomerSimulation/services/apis';
import { put } from 'redux-saga/effects';
import { actionLoadingSuccess } from 'redux/actions';
import { DetailSimulationAction } from '../action-types';
import { actionDetailSimulationError, actionDetailSimulationSuccess } from '../actions';
export function* detailSimulationAsync(action: DetailSimulationAction) {
  try {
    const data: DetailSimulation = yield apis.detailSimulation(action.payload);
    yield put(actionDetailSimulationSuccess(data.simulation));
    yield put(actionLoadingSuccess());
  } catch (err: any) {
    yield put(actionDetailSimulationError(err));
  }
}
