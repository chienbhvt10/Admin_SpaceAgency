import { AppError } from 'commons/type';
import { IUsersFields, UpdateUserVariables } from 'graphql/generated/graphql';
import { UpdateUserActionTypes, UPDATE_USERS, UPDATE_USERS_ERROR, UPDATE_USERS_SUCCESS } from '../action-types';

export const actionUpdateUser = (payload: UpdateUserVariables): UpdateUserActionTypes => ({
  type: UPDATE_USERS,
  payload,
});

export const actionUpdateUserError = (payload: AppError): UpdateUserActionTypes => ({
  type: UPDATE_USERS_ERROR,
  payload,
});

export const actionUpdateUserSuccess = (payload: IUsersFields): UpdateUserActionTypes => ({
  type: UPDATE_USERS_SUCCESS,
  payload,
});
