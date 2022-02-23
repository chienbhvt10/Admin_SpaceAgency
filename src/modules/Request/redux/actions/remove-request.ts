import { AppError } from 'commons/type';
import { IRequest, RemoveRequestVariables } from 'graphql/generated/graphql';
import {
  RemoveRequestActionTypes,
  REMOVE_REQUEST,
  REMOVE_REQUEST_ERROR,
  REMOVE_REQUEST_SUCCESS,
} from '../action-types';

export const actionRemoveRequest = (payload: RemoveRequestVariables): RemoveRequestActionTypes => ({
  type: REMOVE_REQUEST,
  payload,
});

export const actionRemoveRequestError = (payload: AppError): RemoveRequestActionTypes => ({
  type: REMOVE_REQUEST_ERROR,
  payload,
});

export const actionRemoveRequestSuccess = (payload: IRequest): RemoveRequestActionTypes => ({
  type: REMOVE_REQUEST_SUCCESS,
  payload,
});
