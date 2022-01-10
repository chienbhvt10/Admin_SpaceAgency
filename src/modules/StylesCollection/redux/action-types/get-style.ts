import { AppError } from 'commons/type';

export const GET_STYLE = 'GET_STYLE';
export const GET_STYLE_SUCCESS = 'GET_STYLE_SUCCESS';
export const GET_STYLE_ERROR = 'GET_STYLE_ERROR';

export interface GetStyleAction {
  type: typeof GET_STYLE;
  payload: any;
}
export interface GetStyleActionSuccess {
  type: typeof GET_STYLE_SUCCESS;
  payload: any;
}
export interface GetStyleActionError {
  type: typeof GET_STYLE_ERROR;
  payload: AppError;
}
export type GetStyleActionTypes = GetStyleAction | GetStyleActionSuccess | GetStyleActionError;
