import { AppError } from 'commons/type';

export const GET_LIST_STYLE = 'GET_LIST_STYLE';
export const GET_LIST_STYLE_SUCCESS = 'GET_LIST_STYLE_SUCCESS';
export const GET_LIST_STYLE_ERROR = 'GET_LIST_STYLE_ERROR';

export interface GetListStyleAction {
  type: typeof GET_LIST_STYLE;
  payload: any;
}
export interface GetListStyleActionSuccess {
  type: typeof GET_LIST_STYLE_SUCCESS;
  payload: any;
}
export interface GetListStyleActionError {
  type: typeof GET_LIST_STYLE_ERROR;
  payload: AppError;
}
export type GetListStyleActionTypes = GetListStyleAction | GetListStyleActionSuccess | GetListStyleActionError;
