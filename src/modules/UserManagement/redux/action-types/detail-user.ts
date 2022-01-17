import { AppError } from 'commons/type';
import { GetUserVariables, IUsersFields, PaginationInput } from 'graphql/generated/graphql';
export const DETAIL_USERS = 'DETAIL_USERS';
export const DETAIL_USERS_SUCCESS = 'DETAIL_USERS_SUCCESS';
export const DETAIL_USERS_ERROR = 'DETAIL_USERS_ERROR';

export interface DetailUserState {
  loading: boolean;
  dataUser?: IUsersFields;
}

export interface DetailUserAction {
  type: typeof DETAIL_USERS;
  payload: GetUserVariables;
}

export interface DetailUserActionSuccess {
  type: typeof DETAIL_USERS_SUCCESS;
  payload: IUsersFields;
}

export interface DetailUserActionError {
  type: typeof DETAIL_USERS_ERROR;
  payload: AppError;
}
export type DetailUserActionTypes = DetailUserAction | DetailUserActionSuccess | DetailUserActionError;
