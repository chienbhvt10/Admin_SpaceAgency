import { AppError } from 'commons/type';
import { Auth, LoginAdminVariables, User } from 'graphql/generated/graphql';
import { AUTO_LOGIN_FLOW, LOGIN, LoginActionTypes, LOGIN_ERROR, LOGIN_SUCCESS, ME_ACTION } from '../action-types/login';

export const login = (payload: LoginAdminVariables): LoginActionTypes => ({
  type: LOGIN,
  payload,
});

export const loginError = (payload: AppError): LoginActionTypes => ({
  type: LOGIN_ERROR,
  payload,
});

export const loginSuccess = (payload: Auth): LoginActionTypes => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const me = (payload: User): LoginActionTypes => ({
  type: ME_ACTION,
  payload,
});

export const autoLoginFlow = (payload?: any): LoginActionTypes => ({
  type: AUTO_LOGIN_FLOW,
  payload,
});
