import { CommonPath } from 'commons/base-routes';
import { NotificationSuccess } from 'commons/components/Notification';
import { LoginAdmin, Me } from 'graphql/generated/graphql';
import { getNavigate } from 'helpers/history';
import { getAuthLocalData, setAuthData } from 'helpers/token';
import { delay, put } from 'redux-saga/effects';
import { actionLoadingSuccess } from 'redux/actions';
import * as apis from '../../services/apis';
import { LoginAction, LoginActionSuccess } from '../action-types';
import { loginError, loginSuccess } from '../actions';
import { me, meSuccess } from '../actions/login';

export function* loginAsync(action: LoginAction) {
  try {
    const data: LoginAdmin = yield apis.loginApi(action.payload);
    yield put(loginSuccess(data.loginAdmin));
    NotificationSuccess('通知', 'ログインに成功しました。');
    getNavigate(CommonPath.DEFAULT_PATH);
    yield put(actionLoadingSuccess());
  } catch (err: any) {
    yield put(loginError(err));
  }
}

export function* loginSuccessAsync(action: LoginActionSuccess) {
  const jwtInfo = action.payload;
  if (jwtInfo) {
    setAuthData(jwtInfo);
    yield put(me());
  }
}

export function* autoLoginFlowAsync(action: LoginActionSuccess) {
  const jwtInfo = getAuthLocalData();
  if (jwtInfo) {
    if (action.payload === CommonPath.LOGIN_PATH) {
      getNavigate(CommonPath.DEFAULT_PATH);
    }
    yield put(loginSuccess(jwtInfo));
  } else {
    getNavigate(CommonPath.LOGIN_PATH);
  }
}
export function* getMeAsync() {
  try {
    const data: Me = yield apis.me();
    if (data.me) yield put(meSuccess(data.me));
  } catch (err: any) {
    yield put(loginError(err));
  }
}
