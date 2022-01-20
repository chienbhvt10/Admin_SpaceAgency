import { AppError } from 'commons/type';
import { IUsersFields, RemoveUserVariables } from 'graphql/generated/graphql';
export const REMOVE_USER = 'REMOVE_USER';
export const REMOVE_USER_SUCCESS = 'REMOVE_USER_SUCCESS';
export const REMOVE_USER_ERROR = 'REMOVE_USER_ERROR';

export interface RemoveUserState {
  loading: boolean;
  dataRemoveUser?: IUsersFields;
}

export interface RemoveUserAction {
  type: typeof REMOVE_USER;
  payload: RemoveUserVariables;
}

export interface RemoveUserActionSuccess {
  type: typeof REMOVE_USER_SUCCESS;
  payload: IUsersFields;
}

export interface RemoveUserActionError {
  type: typeof REMOVE_USER_ERROR;
  payload: AppError;
}
export type RemoveUserActionTypes = RemoveUserAction | RemoveUserActionSuccess | RemoveUserActionError;
