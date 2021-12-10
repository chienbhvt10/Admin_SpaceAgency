import { CommonPath } from 'commons/base-routes';
import { NotificationSuccess } from 'commons/components/Notification';
import env from 'env';
import { Login } from 'graphql/generated/graphql';
import { getNavigate, getRedirectUrl } from 'helpers/history';
import { put } from 'redux-saga/effects';
import { actionLoadingSuccess } from 'redux/actions';
import * as apis from '../../servieces/apis';
import { LoginAction, LoginActionSuccess } from '../action-types';
import { loginError, loginSuccess } from '../actions';
const TOKEN_KEY = env.tokenKey;

export function* loginAsync(action: LoginAction) {
  try {
    const payload: Login = yield apis.loginApi(action.payload);
    yield put(loginSuccess(payload));
    yield put(actionLoadingSuccess());
  } catch (err: any) {
    yield put(loginError(err));
  }
}

export function loginSuccessAsync(action: LoginActionSuccess) {
  const user = action.payload.login;
  const redirectUrl = getRedirectUrl();
  if (user?.token) {
    getNavigate(redirectUrl || CommonPath.DEFAULT_PATH);
    NotificationSuccess('Thông báo', 'Đăng nhập thành công');
    localStorage.setItem(TOKEN_KEY, user.token);
  }
}

export function* autoLoginFlow() {}

// export function* logoutFlow() {
//   localStorage.removeItem(TOKEN_KEY);
// }
