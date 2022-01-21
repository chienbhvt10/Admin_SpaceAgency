import { AppError } from 'commons/type';
import { IStyle, IUsersFields, RemoveStyleVariables } from 'graphql/generated/graphql';
export const REMOVE_STYLE = 'REMOVE_STYLE';
export const REMOVE_STYLE_SUCCESS = 'REMOVE_STYLE_SUCCESS';
export const REMOVE_STYLE_ERROR = 'REMOVE_STYLE_ERROR';

export interface RemoveStyleState {
  loading: boolean;
  dataRemoveStyle?: IUsersFields;
}

export interface RemoveStyleAction {
  type: typeof REMOVE_STYLE;
  payload: RemoveStyleVariables;
}

export interface RemoveStyleActionSuccess {
  type: typeof REMOVE_STYLE_SUCCESS;
  payload: IStyle;
}

export interface RemoveStyleActionError {
  type: typeof REMOVE_STYLE_ERROR;
  payload: AppError;
}
export type RemoveStyleActionTypes = RemoveStyleAction | RemoveStyleActionSuccess | RemoveStyleActionError;
