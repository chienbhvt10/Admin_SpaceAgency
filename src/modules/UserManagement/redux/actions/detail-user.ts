import { AppError } from 'commons/type';
import { GetUserVariables, IUsersFields } from 'graphql/generated/graphql';
import { DetailUserActionTypes, DETAIL_USERS, DETAIL_USERS_ERROR, DETAIL_USERS_SUCCESS } from '../action-types';

export const actionDetailUser = (payload: GetUserVariables): DetailUserActionTypes => ({
  type: DETAIL_USERS,
  payload,
});

export const actionDetailUserError = (payload: AppError): DetailUserActionTypes => ({
  type: DETAIL_USERS_ERROR,
  payload,
});

export const actionDetailUserSuccess = (payload: IUsersFields): DetailUserActionTypes => ({
  type: DETAIL_USERS_SUCCESS,
  payload,
});
