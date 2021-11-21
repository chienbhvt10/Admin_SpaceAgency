import env from 'env';
import { getNavigate } from 'helpers/history';
import { put } from 'redux-saga/effects';
import { LoginAction, LoginActionSuccess } from '../action-types';
import { loginError, loginSuccess } from '../actions';
import { UserInfo } from './../action-types/login';
import { CommonPath } from './../../../../commons/base-routes';
const TOKEN_KEY = env.tokenKey;
const token = env.token;

export function* loginAsync(action: LoginAction) {
  const { username, password } = action.payload;
  if (username === 'admin' && password === '123456') {
    const user: UserInfo = { token };
    yield put(loginSuccess(user));
  } else {
    yield put(loginError());
  }
}

export function loginSuccessAsync(action: LoginActionSuccess) {
  const user = action.payload;
  if (user?.token) {
    getNavigate(CommonPath.DEFAULT_PATH);
    localStorage.setItem(TOKEN_KEY, user.token);
  }
}

export function* autoLoginFlow() {}

// export function* logoutFlow() {
//   localStorage.removeItem(TOKEN_KEY);
// }
