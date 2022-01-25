import { all, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../action-types';
import { detailSimulationAsync } from './detail-simulation';
import { getListSimulationsAsync } from './list-simulation';
import { removeSimulationAsync } from './remove-simulation';
export default function* root() {
  yield all([takeLatest(actionTypes.LIST_SIMULATION, getListSimulationsAsync)]);
  yield all([takeLatest(actionTypes.REMOVE_SIMULATION, removeSimulationAsync)]);
  yield all([takeLatest(actionTypes.DETAIL_SIMULATION, detailSimulationAsync)]);
}
