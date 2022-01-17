import { all, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../action-types';
import { detailUserAsync } from './detail-user';
import { getListUsersAsync } from './list-users';
import { removeUserAsync } from './remove-user';
import { updateUserAsync } from './update-user';
import { createUserAsync } from './create-user';
export default function* root() {
  yield all([takeLatest(actionTypes.LIST_USERS, getListUsersAsync)]);
  yield all([takeLatest(actionTypes.REMOVE_USER, removeUserAsync)]);
  yield all([takeLatest(actionTypes.DETAIL_USERS, detailUserAsync)]);
  yield all([takeLatest(actionTypes.UPDATE_USERS, updateUserAsync)]);
  yield all([takeLatest(actionTypes.CREATE_USERS, createUserAsync)]);
}
