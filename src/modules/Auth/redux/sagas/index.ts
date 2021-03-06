import { all, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../action-types';
import { autoLoginFlowAsync, getMeAsync, loginAsync, loginSuccessAsync } from './login';
export default function* root() {
  yield all([
    takeLatest(actionTypes.LOGIN, loginAsync),
    takeLatest(actionTypes.LOGIN_SUCCESS, loginSuccessAsync),
    takeLatest(actionTypes.AUTO_LOGIN_FLOW, autoLoginFlowAsync),
    takeLatest(actionTypes.ME_ACTION, getMeAsync),
  ]);
}
