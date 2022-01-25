import { AppError } from 'commons/type';
import { GetListThemesVariables } from 'graphql/generated/graphql';
import {
  LIST_REQUEST,
  LIST_REQUEST_ERROR,
  LIST_REQUEST_SUCCESS,
  RequestsActionTypes,
  RequestsData,
} from '../action-types';

export const actionRequests = (payload: GetListThemesVariables): RequestsActionTypes => ({
  type: LIST_REQUEST,
  payload,
});

export const actionRequestsError = (payload: AppError): RequestsActionTypes => ({
  type: LIST_REQUEST_ERROR,
  payload,
});

export const actionRequestsSuccess = (payload: RequestsData): RequestsActionTypes => ({
  type: LIST_REQUEST_SUCCESS,
  payload,
});
