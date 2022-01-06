import { AppError } from 'commons/type';
import { Users } from 'graphql/generated/graphql';

export const GET_LIST_USER = 'GET_LIST_USER';
export const GET_LIST_USER_SUCCESS = 'GET_LIST_USER_SUCCESS';
export const GET_LIST_USER_ERROR = 'GET_LIST_USER_ERROR';

export interface GetListUserAction {
  type: typeof GET_LIST_USER;
  payload?: boolean;
}

export interface GetListUserActionSuccess {
  type: typeof GET_LIST_USER_SUCCESS;
  payload: Users[];
}

export interface GetListUserActionError {
  type: typeof GET_LIST_USER_ERROR;
  payload: AppError;
}
export type GetListUserActionTypes = GetListUserAction | GetListUserActionSuccess | GetListUserActionError;
