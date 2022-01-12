import { AppError } from 'commons/type';
import { Auth, LoginAdminVariables, User } from 'graphql/generated/graphql';
import {
  AUTO_LOGIN_FLOW,
  LOGIN,
  LoginActionTypes,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  ME_ACTION,
  ME_ACTION_SUCCESS,
} from '../action-types/login';

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

export const me = (): LoginActionTypes => ({
  type: ME_ACTION,
});

export const meSuccess = (payload: User) => ({
  type: ME_ACTION_SUCCESS,
  payload,
});

export const meError = (payload: AppError) => ({
  type: ME_ACTION_SUCCESS,
  payload,
});

export const autoLoginFlow = (payload?: any): LoginActionTypes => ({
  type: AUTO_LOGIN_FLOW,
  payload,
});
