import { AppError } from 'commons/type';
import { CreateUserVariables } from 'graphql/generated/graphql';

export const CREATE_USER = 'CREATE_USER';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_ERROR = 'CREATE_USER_ERROR';

export interface CreateUserAction {
  type: typeof CREATE_USER;
  payload: CreateUserVariables;
}

export interface CreateUserActionSuccess {
  type: typeof CREATE_USER_SUCCESS;
  payload: boolean;
}

export interface CreateUserActionError {
  type: typeof CREATE_USER_ERROR;
  payload: AppError;
}
export type CreateUserActionTypes = CreateUserAction | CreateUserActionSuccess | CreateUserActionError;
