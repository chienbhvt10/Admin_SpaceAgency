import { AppError } from 'commons/type';
import { Auth, LoginAdminVariables, User } from 'graphql/generated/graphql';
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const ME_ACTION = 'ME_ACTION';
export const ME_ACTION_SUCCESS = 'ME_ACTION_SUCCESS';
export const ME_ACTION_ERROR = 'ME_ACTION_ERROR';
export const AUTO_LOGIN_FLOW = 'AUTO_LOGIN_FLOW';

export interface LoginState {
  loading: boolean;
  jwt?: Auth;
  userInfo?: User;
}

export interface LoginAction {
  type: typeof LOGIN;
  payload: LoginAdminVariables;
}

export interface LoginActionSuccess {
  type: typeof LOGIN_SUCCESS;
  payload: Auth;
}

export interface LoginActionError {
  type: typeof LOGIN_ERROR;
  payload: AppError;
}

export interface MeAction {
  type: typeof ME_ACTION;
}

export interface MeActionSuccess {
  type: typeof ME_ACTION_SUCCESS;
  payload: User;
}

export interface MeActionError {
  type: typeof ME_ACTION_ERROR;
  payload: AppError;
}

export interface AutoLoginFlow {
  type: typeof AUTO_LOGIN_FLOW;
  payload?: any;
}
export type LoginActionTypes =
  | LoginAction
  | LoginActionSuccess
  | LoginActionError
  | AutoLoginFlow
  | MeAction
  | MeActionSuccess
  | MeActionError;
