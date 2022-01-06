import { AppError } from 'commons/type';
import { DeleteUserActionTypes, DELETE_USER, DELETE_USER_ERROR, DELETE_USER_SUCCESS } from '../action-types';
import { DeleteUserState } from '../reducers/delete-user';

export const deleteUser = (payload: string): DeleteUserActionTypes => ({
  type: DELETE_USER,
  payload,
});

export const deleteUserError = (payload: AppError): DeleteUserActionTypes => ({
  type: DELETE_USER_ERROR,
  payload,
});

export const deleteUserSuccess = (payload: string): DeleteUserActionTypes => ({
  type: DELETE_USER_SUCCESS,
  payload,
});
