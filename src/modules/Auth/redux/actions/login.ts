import { LoginInput } from 'commons/type';
import { LoginActionTypes, LOGIN, LOGIN_ERROR, LOGIN_SUCCESS, UserInfo } from '../action-types/login';

export const login = (payload: LoginInput): LoginActionTypes => ({
  type: LOGIN,
  payload,
});

export const loginError = (): LoginActionTypes => ({
  type: LOGIN_ERROR
});

export const loginSuccess = (payload: UserInfo): LoginActionTypes => ({
  type: LOGIN_SUCCESS,
  payload,
});