import { AppError } from 'commons/type';
import { UpdateUserVariables } from 'graphql/generated/graphql';

export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_ERROR = 'UPDATE_USER_ERROR';

export interface UpdateUserAction {
  type: typeof UPDATE_USER;
  payload: UpdateUserVariables;
}

export interface UpdateUserActionSuccess {
  type: typeof UPDATE_USER_SUCCESS;
  payload?: boolean;
}

export interface UpdateUserActionError {
  type: typeof UPDATE_USER_ERROR;
  payload: AppError;
}
export type UpdateUserActionTypes = UpdateUserAction | UpdateUserActionSuccess | UpdateUserActionError;
