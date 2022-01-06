import { AppError } from 'commons/type';
import { Users } from 'graphql/generated/graphql';

export const GET_DETAIL_USER = 'GET_DETAIL_USER';
export const GET_DETAIL_USER_SUCCESS = 'GET_DETAIL_USER_SUCCESS';
export const GET_DETAIL_USER_ERROR = 'GET_DETAIL_USER_ERROR';

export interface GetDetailUserAction {
  type: typeof GET_DETAIL_USER;
  payload: string;
}

export interface GetDetailUserActionSuccess {
  type: typeof GET_DETAIL_USER_SUCCESS;
  payload?: Users;
}

export interface GetDetailUserActionError {
  type: typeof GET_DETAIL_USER_ERROR;
  payload: AppError;
}
export type GetDetailUserActionTypes = GetDetailUserAction | GetDetailUserActionSuccess | GetDetailUserActionError;
