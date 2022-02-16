import { AppError } from 'commons/type';
import { IRequest, RemoveRequestVariables } from 'graphql/generated/graphql';
export const REMOVE_REQUEST = 'REMOVE_REQUEST';
export const REMOVE_REQUEST_SUCCESS = 'REMOVE_REQUEST_SUCCESS';
export const REMOVE_REQUEST_ERROR = 'REMOVE_REQUEST_ERROR';

export interface RemoveRequestState {
  loading: boolean;
  dataRemoveRequest?: IRequest;
}

export interface RemoveRequestAction {
  type: typeof REMOVE_REQUEST;
  payload: RemoveRequestVariables;
}

export interface RemoveRequestActionSuccess {
  type: typeof REMOVE_REQUEST_SUCCESS;
  payload: IRequest;
}

export interface RemoveRequestActionError {
  type: typeof REMOVE_REQUEST_ERROR;
  payload: AppError;
}
export type RemoveRequestActionTypes = RemoveRequestAction | RemoveRequestActionSuccess | RemoveRequestActionError;
