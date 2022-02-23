import { AppError } from 'commons/type';
import { IRequest, UpdateRequestStatusVariables } from 'graphql/generated/graphql';
export const UPDATE_REQUEST_STATUS = 'UPDATE_REQUEST_STATUS';
export const UPDATE_REQUEST_STATUS_SUCCESS = 'UPDATE_REQUEST_STATUS_SUCCESS';
export const UPDATE_REQUEST_STATUS_ERROR = 'UPDATE_REQUEST_STATUS_ERROR';

export interface UpdateRequestStatusState {
  loading: boolean;
  dataRequest?: IRequest;
}

export interface UpdateRequestStatusAction {
  type: typeof UPDATE_REQUEST_STATUS;
  payload: UpdateRequestStatusVariables;
}

export interface UpdateRequestStatusActionSuccess {
  type: typeof UPDATE_REQUEST_STATUS_SUCCESS;
  payload: IRequest;
}

export interface UpdateRequestStatusActionError {
  type: typeof UPDATE_REQUEST_STATUS_ERROR;
  payload: AppError;
}
export type UpdateRequestStatusActionTypes =
  | UpdateRequestStatusAction
  | UpdateRequestStatusActionSuccess
  | UpdateRequestStatusActionError;
