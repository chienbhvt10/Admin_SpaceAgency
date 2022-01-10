import { AppError } from 'commons/type';

export const UPDATE_STYLE = 'UPDATE_STYLE';
export const UPDATE_STYLE_SUCCESS = 'UPDATE_STYLE_SUCCESS';
export const UPDATE_STYLE_ERROR = 'UPDATE_STYLE_ERROR';

export interface UpdateStyleAction {
  type: typeof UPDATE_STYLE;
  payload: any;
}
export interface UpdateStyleActionSuccess {
  type: typeof UPDATE_STYLE_SUCCESS;
  payload: boolean;
}
export interface UpdateStyleActionError {
  type: typeof UPDATE_STYLE_ERROR;
  payload: AppError;
}
export type UpdateStyleActionTypes = UpdateStyleAction | UpdateStyleActionSuccess | UpdateStyleActionError;
