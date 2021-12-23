import { CommonPath } from 'commons/base-routes';
import { NotificationSuccess } from 'commons/components/Notification';
import { LoginAdmin } from 'graphql/generated/graphql';
import { getNavigate, getRedirectUrl } from 'helpers/history';
import { getAuthLocalData, setAuthData } from 'helpers/token';
import { put } from 'redux-saga/effects';
import { actionLoadingSuccess } from 'redux/actions';
import * as apis from '../../services/apis';
import { AutoLoginFlow, LoginAction, LoginActionSuccess } from '../action-types';
import { loginError, loginSuccess } from '../actions';

export function* loginAsync(action: LoginAction) {
  try {
    const data: LoginAdmin = yield apis.loginApi(action.payload);
    yield put(loginSuccess(data.loginAdmin));
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

export function autoLoginFlow(action: AutoLoginFlow) {
  const authData = getAuthLocalData();
  const cookies = action.payload;
  if (!authData) {
    getNavigate(CommonPath.LOGIN_PATH);
  } else {
    getNavigate(cookies.NEXT_LOCALE || CommonPath.DEFAULT_PATH);
  }
}

// export function* logoutFlow() {
//   localStorage.removeItem(TOKEN_KEY);
// }
