import { AppError } from 'commons/type';
import { UpdateUserVariables } from 'graphql/generated/graphql';
import { UpdateUserActionTypes, UPDATE_USER, UPDATE_USER_ERROR, UPDATE_USER_SUCCESS } from '../action-types';

export const updateUser = (payload: UpdateUserVariables): UpdateUserActionTypes => ({
  type: UPDATE_USER,
  payload,
});

export const updateUserError = (payload: AppError): UpdateUserActionTypes => ({
  type: UPDATE_USER_ERROR,
  payload,
});

export const updateUserSuccess = (payload?: boolean): UpdateUserActionTypes => ({
  type: UPDATE_USER_SUCCESS,
  payload,
});
