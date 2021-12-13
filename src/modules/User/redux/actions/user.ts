import { AppError } from 'commons/type';
import { IUsers } from 'graphql/generated/graphql';
import { GetUserActionTypes, GET_USER, GET_USER_ERROR, GET_USER_SUCCESS } from '../action-types';

export const getUser = (): GetUserActionTypes => ({
  type: GET_USER,
});

export const getUserError = (payload: AppError): GetUserActionTypes => ({
  type: GET_USER_ERROR,
  payload,
});

export const getUserSuccess = (payload: IUsers): GetUserActionTypes => ({
  type: GET_USER_SUCCESS,
  payload,
});
