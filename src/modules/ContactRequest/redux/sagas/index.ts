import { all, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../action-types';
import { getListRequestsAsync } from './list-requests';
export default function* root() {
  yield all([takeLatest(actionTypes.LIST_REQUEST, getListRequestsAsync)]);
}
