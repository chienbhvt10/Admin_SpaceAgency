import { all, takeLatest, fork } from 'redux-saga/effects';
import { loginAsync, loginSuccessAsync, autoLoginFlow } from './login';
import * as actionTypes from '../action-types';
export default function* root() {
  yield all([
    takeLatest(actionTypes.LOGIN, loginAsync),
    takeLatest(actionTypes.LOGIN_SUCCESS, loginSuccessAsync),
    fork(autoLoginFlow),
  ]);
}
