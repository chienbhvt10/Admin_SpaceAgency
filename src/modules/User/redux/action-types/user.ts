import { AppError } from 'commons/type';
import { IUsers, Me } from 'graphql/generated/graphql';

export const GET_USER = 'GET_USER';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_ERROR = 'GET_USER_ERROR';

export interface UserState {
  loading: boolean;
  data?: IUsers;
}

export interface GetUserAction {
  type: typeof GET_USER;
}

export interface GetUserActionSuccess {
  type: typeof GET_USER_SUCCESS;
  payload: IUsers;
}

export interface GetUserActionError {
  type: typeof GET_USER_ERROR;
  payload: AppError;
}
export type GetUserActionTypes = GetUserAction | GetUserActionSuccess | GetUserActionError;
