import { AppError } from 'commons/type';
import { GetStyleVariables, IStyle, IUsersFields } from 'graphql/generated/graphql';

export const GET_STYLE = 'GET_STYLE';
export const GET_STYLE_SUCCESS = 'GET_STYLE_SUCCESS';
export const GET_STYLE_ERROR = 'GET_STYLE_ERROR';

export interface GetStyleState {
  loading: boolean;
  dataStyle?: IStyle;
}

export interface GetStyleAction {
  type: typeof GET_STYLE;
  payload: GetStyleVariables;
}

export interface GetStyleActionSuccess {
  type: typeof GET_STYLE_SUCCESS;
  payload: IStyle;
}

export interface GetStyleActionError {
  type: typeof GET_STYLE_ERROR;
  payload: AppError;
}

export type GetStyleActionTypes = GetStyleAction | GetStyleActionSuccess | GetStyleActionError;
