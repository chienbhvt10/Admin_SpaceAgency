import { AppError } from 'commons/type';
import { GetListUsersVariables, IUsersFields, PaginationInput, WhereInput } from 'graphql/generated/graphql';
export const LIST_USERS = 'LIST_USERS';
export const LIST_USERS_SUCCESS = 'LIST_USERS_SUCCESS';
export const LIST_USERS_ERROR = 'LIST_USERS_ERROR';

export interface UsersData {
  dataUsers: IUsersFields[];
  pagination?: PaginationInput;
  total?: number;
  where?: WhereInput;
}
export interface UsersState {
  loading: boolean;
  pagination: PaginationInput;
  where?: WhereInput;
  total?: number;
  dataUsers: IUsersFields[];
}

export interface UsersAction {
  type: typeof LIST_USERS;
  payload: GetListUsersVariables;
}

export interface UsersActionSuccess {
  type: typeof LIST_USERS_SUCCESS;
  payload: UsersData;
}

export interface UsersActionError {
  type: typeof LIST_USERS_ERROR;
  payload: AppError;
}
export type UsersActionTypes = UsersAction | UsersActionSuccess | UsersActionError;
