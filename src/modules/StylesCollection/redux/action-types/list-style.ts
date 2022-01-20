import { AppError } from 'commons/type';
import { GetListStyleVariables, IStyle, PaginationInput, WhereInput } from 'graphql/generated/graphql';

export const GET_LIST_STYLE = 'GET_LIST_STYLE';
export const GET_LIST_STYLE_SUCCESS = 'GET_LIST_STYLE_SUCCESS';
export const GET_LIST_STYLE_ERROR = 'GET_LIST_STYLE_ERROR';

export interface StyleData {
  dataStyles: IStyle[];
  pagination?: PaginationInput;
  where?: WhereInput;
}

export interface StyleState {
  dataStyles: IStyle[];
  pagination: PaginationInput;
  where?: WhereInput;
  loading: boolean;
}

export interface GetListStyleAction {
  type: typeof GET_LIST_STYLE;
  payload: GetListStyleVariables;
}

export interface GetListStyleActionSuccess {
  type: typeof GET_LIST_STYLE_SUCCESS;
  payload: StyleData;
}

export interface GetListStyleActionError {
  type: typeof GET_LIST_STYLE_ERROR;
  payload: AppError;
}

export type GetListStyleActionTypes = GetListStyleAction | GetListStyleActionSuccess | GetListStyleActionError;
