import { CommonPath } from 'commons/base-routes';
import { NotificationSuccess } from 'commons/components/Notification';
import { LoginAdmin, Me } from 'graphql/generated/graphql';
import { getNavigate, getRedirectUrl } from 'helpers/history';
import { setAuthData } from 'helpers/token';
import { put } from 'redux-saga/effects';
import { actionLoadingSuccess } from 'redux/actions';
import * as apis from '../../services/apis';
import { LoginAction, LoginActionSuccess } from '../action-types';
import { autoLoginFlow, loginError, loginSuccess, me } from '../actions';

export function* loginAsync(action: LoginAction) {
  try {
    const data: LoginAdmin = yield apis.loginApi(action.payload);
    yield put(loginSuccess(data.loginAdmin));
    yield put(autoLoginFlow());
    yield put(actionLoadingSuccess());
  } catch (err: any) {
    yield put(loginError(err));
  }
}

export function loginSuccessAsync(action: LoginActionSuccess) {
  const user = action.payload;
  const redirectUrl = getRedirectUrl();
  if (user) {
    getNavigate(redirectUrl || CommonPath.DEFAULT_PATH);
    NotificationSuccess('Thông báo', 'Đăng nhập thành công');
    setAuthData(user);
  }
}

export function* autoLoginFlowAsync() {
  try {
    const data: Me = yield apis.me();
    yield put(me(data.me));
    getNavigate(CommonPath.DEFAULT_PATH);
  } catch (err: any) {
    yield put(loginError(err));
  }
}

// export function* logoutFlow() {
//   localStorage.removeItem(TOKEN_KEY);
// }
