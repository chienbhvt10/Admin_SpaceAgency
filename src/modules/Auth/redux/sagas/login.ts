import env from 'env';
import { getNavigate } from 'helpers/history';
import { delay, put } from 'redux-saga/effects';
import { actionLoadingError, actionLoadingSuccess } from 'redux/actions';
import { LoginAction, LoginActionSuccess, UserInfo } from '../action-types';
import { loginError, loginSuccess } from '../actions';
import { CommonPath } from 'commons/base-routes';
const TOKEN_KEY = env.tokenKey;
const token = env.token;

export function* loginAsync(action: LoginAction) {
  const { userName, passWord } = action.payload;
  if (userName === 'admin' && passWord === '123456') {
    const user: UserInfo = { token };
    yield delay(1000);
    yield put(loginSuccess(user));
    yield put(actionLoadingSuccess());
  } else {
    yield delay(1000);
    yield put(actionLoadingError());
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
