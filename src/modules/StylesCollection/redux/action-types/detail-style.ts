import { AppError } from 'commons/type';
import { GetStyleVariables, IStyle } from 'graphql/generated/graphql';
export const DETAIL_STYLE = 'DETAIL_STYLE';
export const DETAIL_STYLE_SUCCESS = 'DETAIL_STYLE_SUCCESS';
export const DETAIL_STYLE_ERROR = 'DETAIL_STYLE_ERROR';

export interface DetailStyleState {
  loading: boolean;
  dataStyle?: IStyle;
}

export interface DetailStyleAction {
  type: typeof DETAIL_STYLE;
  payload: GetStyleVariables;
}

export interface DetailStyleActionSuccess {
  type: typeof DETAIL_STYLE_SUCCESS;
  payload: IStyle;
}

export interface DetailStyleActionError {
  type: typeof DETAIL_STYLE_ERROR;
  payload: AppError;
}
export type DetailStyleActionTypes = DetailStyleAction | DetailStyleActionSuccess | DetailStyleActionError;
