import { all, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../action-types';
import { getListSimulationsAsync } from './list-simulation';
export default function* root() {
  yield all([takeLatest(actionTypes.LIST_SIMULATION, getListSimulationsAsync)]);
}
