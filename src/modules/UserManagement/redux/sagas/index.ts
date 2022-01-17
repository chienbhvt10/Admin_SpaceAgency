import { all, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../action-types';
import { getListUsersAsync } from './list-users';
import { removeUserAsync } from './remove-user';
export default function* root() {
  yield all([takeLatest(actionTypes.LIST_USERS, getListUsersAsync)]);
  yield all([takeLatest(actionTypes.REMOVE_USER, removeUserAsync)]);
}
