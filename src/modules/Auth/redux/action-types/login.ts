import { AppError } from 'commons/type';
import { Jwt, Login, LoginUserInput } from 'graphql/generated/graphql';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export interface LoginState {
  loading: boolean;
  jwt?: Jwt;
}

export interface LoginAction {
  type: typeof LOGIN;
  payload: LoginUserInput;
}

export interface LoginActionSuccess {
  type: typeof LOGIN_SUCCESS;
  payload: Login;
}

export interface LoginActionError {
  type: typeof LOGIN_ERROR;
  payload: AppError;
}

export type LoginActionTypes = LoginAction | LoginActionSuccess | LoginActionError;
