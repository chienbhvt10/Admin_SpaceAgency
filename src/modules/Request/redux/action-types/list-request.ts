import { AppError } from 'commons/type';
import { GetListRequestVariables, IRequest, PaginationInput, WhereInput } from 'graphql/generated/graphql';
export const LIST_REQUEST = 'LIST_REQUEST';
export const LIST_REQUEST_SUCCESS = 'LIST_REQUEST_SUCCESS';
export const LIST_REQUEST_ERROR = 'LIST_REQUEST_ERROR';

export interface RequestsData {
  dataRequests: IRequest[];
  pagination?: PaginationInput;
  total?: number;
  where?: WhereInput;
}
export interface RequestsState {
  loading: boolean;
  pagination: PaginationInput;
  where?: WhereInput;
  total?: number;
  dataRequests: IRequest[];
}

export interface RequestsAction {
  type: typeof LIST_REQUEST;
  payload: GetListRequestVariables;
}

export interface RequestsActionSuccess {
  type: typeof LIST_REQUEST_SUCCESS;
  payload: RequestsData;
}

export interface RequestsActionError {
  type: typeof LIST_REQUEST_ERROR;
  payload: AppError;
}
export type RequestsActionTypes = RequestsAction | RequestsActionSuccess | RequestsActionError;
