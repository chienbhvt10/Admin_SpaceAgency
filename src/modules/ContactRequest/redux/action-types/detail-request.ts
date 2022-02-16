import { AppError } from 'commons/type';
import { GetRequestVariables, GetStyleVariables, IRequest, IStyle } from 'graphql/generated/graphql';
export const DETAIL_REQUEST = 'DETAIL_REQUEST';
export const DETAIL_REQUEST_SUCCESS = 'DETAIL_REQUEST_SUCCESS';
export const DETAIL_REQUEST_ERROR = 'DETAIL_REQUEST_ERROR';

export interface DetailRequestState {
  loading: boolean;
  dataRequest?: IRequest;
}

export interface DetailRequestAction {
  type: typeof DETAIL_REQUEST;
  payload: GetRequestVariables;
}

export interface DetailRequestActionSuccess {
  type: typeof DETAIL_REQUEST_SUCCESS;
  payload: IRequest;
}

export interface DetailRequestActionError {
  type: typeof DETAIL_REQUEST_ERROR;
  payload: AppError;
}
export type DetailRequestActionTypes = DetailRequestAction | DetailRequestActionSuccess | DetailRequestActionError;
