import { AppError } from 'commons/type';
import { LoginAdmin, LoginAdminInput } from 'graphql/generated/graphql';
import { AUTO_LOGIN_FLOW, LOGIN, LoginActionTypes, LOGIN_ERROR, LOGIN_SUCCESS } from '../action-types/login';

export const login = (payload: LoginAdminInput): LoginActionTypes => ({
  type: LOGIN,
  payload,
});

export const loginError = (payload: AppError): LoginActionTypes => ({
  type: LOGIN_ERROR,
  payload,
});

export const loginSuccess = (payload: LoginAdmin): LoginActionTypes => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const autoLoginFlow = (payload?: any): LoginActionTypes => ({
  type: AUTO_LOGIN_FLOW,
  payload,
});
