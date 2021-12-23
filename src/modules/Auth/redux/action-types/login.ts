import { AppError } from 'commons/type';
import { Jwt, LoginAdmin, LoginUserInput } from 'graphql/generated/graphql';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const AUTO_LOGIN_FLOW = 'AUTO_LOGIN_FLOW';

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
  payload: Jwt;
}

export interface LoginActionError {
  type: typeof LOGIN_ERROR;
  payload: AppError;
}

export interface AutoLoginFlow {
  type: typeof AUTO_LOGIN_FLOW;
  payload?: any;
}
export type LoginActionTypes = LoginAction | LoginActionSuccess | LoginActionError | AutoLoginFlow;
