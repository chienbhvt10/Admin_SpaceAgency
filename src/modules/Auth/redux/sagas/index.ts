import { all, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../action-types';
import { autoLoginFlow, loginAsync, loginSuccessAsync } from './login';
export default function* root() {
  yield all([
    takeLatest(actionTypes.LOGIN, loginAsync),
    takeLatest(actionTypes.LOGIN_SUCCESS, loginSuccessAsync),
    takeLatest(actionTypes.AUTO_LOGIN_FLOW, autoLoginFlow),
  ]);
}
