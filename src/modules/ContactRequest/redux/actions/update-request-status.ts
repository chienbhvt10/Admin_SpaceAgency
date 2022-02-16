import { AppError } from 'commons/type';
import { IRequest, UpdateRequestStatusVariables } from 'graphql/generated/graphql';
import {
  UpdateRequestStatusActionTypes,
  UPDATE_REQUEST_STATUS,
  UPDATE_REQUEST_STATUS_ERROR,
  UPDATE_REQUEST_STATUS_SUCCESS,
} from '../action-types';

export const actionUpdateRequestStatus = (payload: UpdateRequestStatusVariables): UpdateRequestStatusActionTypes => ({
  type: UPDATE_REQUEST_STATUS,
  payload,
});

export const actionUpdateRequestStatusError = (payload: AppError): UpdateRequestStatusActionTypes => ({
  type: UPDATE_REQUEST_STATUS_ERROR,
  payload,
});

export const actionUpdateRequestStatusSuccess = (payload: IRequest): UpdateRequestStatusActionTypes => ({
  type: UPDATE_REQUEST_STATUS_SUCCESS,
  payload,
});
