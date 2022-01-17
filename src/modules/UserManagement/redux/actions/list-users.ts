import { AppError } from 'commons/type';
import { GetListThemesVariables } from 'graphql/generated/graphql';
import { LIST_USERS, LIST_USERS_ERROR, LIST_USERS_SUCCESS, UsersActionTypes, UsersData } from '../action-types';

export const actionUsers = (payload: GetListThemesVariables): UsersActionTypes => ({
  type: LIST_USERS,
  payload,
});

export const actionUsersError = (payload: AppError): UsersActionTypes => ({
  type: LIST_USERS_ERROR,
  payload,
});

export const actionUsersSuccess = (payload: UsersData): UsersActionTypes => ({
  type: LIST_USERS_SUCCESS,
  payload,
});
