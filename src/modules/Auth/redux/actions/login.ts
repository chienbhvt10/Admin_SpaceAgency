import { AppError } from 'commons/type';
import { Login, LoginUserInput } from 'graphql/generated/graphql';
import { LOGIN, LoginActionTypes, LOGIN_ERROR, LOGIN_SUCCESS } from '../action-types/login';

export const login = (payload: LoginUserInput): LoginActionTypes => ({
  type: LOGIN,
  payload,
});

export const loginError = (payload: AppError): LoginActionTypes => ({
  type: LOGIN_ERROR,
  payload,
});

export const loginSuccess = (payload: Login): LoginActionTypes => ({
  type: LOGIN_SUCCESS,
  payload,
});
