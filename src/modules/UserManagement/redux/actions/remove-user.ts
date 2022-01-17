import { AppError } from 'commons/type';
import { RemoveUserVariables, IUsersFields } from 'graphql/generated/graphql';
import { RemoveUserActionTypes, REMOVE_USER, REMOVE_USER_ERROR, REMOVE_USER_SUCCESS } from '../action-types';

export const actionRemoveUser = (payload: RemoveUserVariables): RemoveUserActionTypes => ({
  type: REMOVE_USER,
  payload,
});

export const actionRemoveUserError = (payload: AppError): RemoveUserActionTypes => ({
  type: REMOVE_USER_ERROR,
  payload,
});

export const actionRemoveUserSuccess = (payload: IUsersFields): RemoveUserActionTypes => ({
  type: REMOVE_USER_SUCCESS,
  payload,
});
