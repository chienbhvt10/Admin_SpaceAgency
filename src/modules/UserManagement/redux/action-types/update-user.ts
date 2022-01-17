import { AppError } from 'commons/type';
import { IUsersFields, UpdateUserVariables } from 'graphql/generated/graphql';
export const UPDATE_USERS = 'UPDATE_USERS';
export const UPDATE_USERS_SUCCESS = 'UPDATE_USERS_SUCCESS';
export const UPDATE_USERS_ERROR = 'UPDATE_USERS_ERROR';

export interface UpdateUserState {
  loading: boolean;
  dataUser?: IUsersFields;
}

export interface UpdateUserAction {
  type: typeof UPDATE_USERS;
  payload: UpdateUserVariables;
}

export interface UpdateUserActionSuccess {
  type: typeof UPDATE_USERS_SUCCESS;
  payload: IUsersFields;
}

export interface UpdateUserActionError {
  type: typeof UPDATE_USERS_ERROR;
  payload: AppError;
}
export type UpdateUserActionTypes = UpdateUserAction | UpdateUserActionSuccess | UpdateUserActionError;
