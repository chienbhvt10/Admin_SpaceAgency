import { AppError } from 'commons/type';
import { CreateCustomerVariables, IUsersFields } from 'graphql/generated/graphql';
export const CREATE_USERS = 'CREATE_USERS';
export const CREATE_USERS_SUCCESS = 'CREATE_USERS_SUCCESS';
export const CREATE_USERS_ERROR = 'CREATE_USERS_ERROR';

export interface CreateUserState {
  loading: boolean;
  dataUser?: IUsersFields;
}

export interface CreateUserAction {
  type: typeof CREATE_USERS;
  payload: CreateCustomerVariables;
}

export interface CreateUserActionSuccess {
  type: typeof CREATE_USERS_SUCCESS;
  payload: IUsersFields;
}

export interface CreateUserActionError {
  type: typeof CREATE_USERS_ERROR;
  payload: AppError;
}
export type CreateUserActionTypes = CreateUserAction | CreateUserActionSuccess | CreateUserActionError;
