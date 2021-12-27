import { AppError } from 'commons/type';
import { Users } from 'graphql/generated/graphql';
import {
  GetDetailUserActionTypes,
  GET_DETAIL_USER,
  GET_DETAIL_USER_ERROR,
  GET_DETAIL_USER_SUCCESS,
} from '../action-types';

export const getDetailUser = (payload: string): GetDetailUserActionTypes => ({
  type: GET_DETAIL_USER,
  payload,
});

export const getDetailUserError = (payload: AppError): GetDetailUserActionTypes => ({
  type: GET_DETAIL_USER_ERROR,
  payload,
});

export const getDetailUserSuccess = (payload?: Users): GetDetailUserActionTypes => ({
  type: GET_DETAIL_USER_SUCCESS,
  payload,
});
