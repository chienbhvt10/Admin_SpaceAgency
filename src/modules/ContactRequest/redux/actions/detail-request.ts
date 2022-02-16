import { AppError } from 'commons/type';
import { GetRequestVariables, IRequest } from 'graphql/generated/graphql';
import {
  DetailRequestActionTypes,
  DETAIL_REQUEST,
  DETAIL_REQUEST_ERROR,
  DETAIL_REQUEST_SUCCESS,
} from '../action-types';

export const actionDetailRequest = (payload: GetRequestVariables): DetailRequestActionTypes => ({
  type: DETAIL_REQUEST,
  payload,
});

export const actionDetailRequestError = (payload: AppError): DetailRequestActionTypes => ({
  type: DETAIL_REQUEST_ERROR,
  payload,
});

export const actionDetailRequestSuccess = (payload: IRequest): DetailRequestActionTypes => ({
  type: DETAIL_REQUEST_SUCCESS,
  payload,
});
