import { takeLatest, all } from 'redux-saga/effects';
import * as actionTypes from '../action-types';
import { getUserAsync } from './user';
export default function* userSagas() {
  yield all([takeLatest([actionTypes.GET_USER], getUserAsync)]);
}
