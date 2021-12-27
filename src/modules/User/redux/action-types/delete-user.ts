import { AppError } from 'commons/type';
import { DeleteUserState } from '../reducers/delete-user';

export const DELETE_USER = 'DELETE_USER';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const DELETE_USER_ERROR = 'DELETE_USER_ERROR';

export interface DeleteUserAction {
  type: typeof DELETE_USER;
  payload: string;
}

export interface DeleteUserActionSuccess {
  type: typeof DELETE_USER_SUCCESS;
  payload: string;
}

export interface DeleteUserActionError {
  type: typeof DELETE_USER_ERROR;
  payload: AppError;
}
export type DeleteUserActionTypes = DeleteUserAction | DeleteUserActionSuccess | DeleteUserActionError;
