import { takeLatest, all } from 'redux-saga/effects';
import * as actionTypes from '../action-types';
import { deleteUserAsync } from './delete-user';
import { getAllUserAsync } from './list-user';
import { getUserAsync } from './user';
import { getDetailUserAsync } from './get-user';
import { updateUserAsync } from './update-user';
import { createUserAsync } from './create-user';
export default function* userSagas() {
  yield all([takeLatest([actionTypes.GET_USER], getUserAsync)]);
  yield all([takeLatest([actionTypes.GET_LIST_USER], getAllUserAsync)]);
  yield all([takeLatest([actionTypes.DELETE_USER], deleteUserAsync)]);
  yield all([takeLatest([actionTypes.GET_DETAIL_USER], getDetailUserAsync)]);
  yield all([takeLatest([actionTypes.UPDATE_USER], updateUserAsync)]);
  yield all([takeLatest([actionTypes.CREATE_USER], createUserAsync)]);
}
