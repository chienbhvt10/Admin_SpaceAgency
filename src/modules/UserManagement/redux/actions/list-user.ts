import { AppError } from 'commons/type';
import { Users } from 'graphql/generated/graphql';
import { GetListUserActionTypes, GET_LIST_USER, GET_LIST_USER_ERROR, GET_LIST_USER_SUCCESS } from '../action-types';

export const getAllUser = (payload?: boolean): GetListUserActionTypes => ({
  type: GET_LIST_USER,
  payload,
});

export const getAllUserError = (payload: AppError): GetListUserActionTypes => ({
  type: GET_LIST_USER_ERROR,
  payload,
});

export const getAllUserSuccess = (payload: Users[]): GetListUserActionTypes => ({
  type: GET_LIST_USER_SUCCESS,
  payload,
});
