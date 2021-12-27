import { takeLatest, all } from 'redux-saga/effects';
import * as actionTypes from '../action-types';
import { getAllUserAsync } from './list-user';
import { getUserAsync } from './user';
export default function* userSagas() {
  yield all([takeLatest([actionTypes.GET_USER], getUserAsync)]);
  yield all([takeLatest([actionTypes.GET_LIST_USER], getAllUserAsync)]);
}
