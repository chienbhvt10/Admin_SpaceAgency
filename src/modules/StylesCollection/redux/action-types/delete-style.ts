import { AppError } from 'commons/type';

export const DELETE_STYLE = 'DELETE_STYLE';
export const DELETE_STYLE_SUCCESS = 'DELETE_STYLE_SUCCESS';
export const DELETE_STYLE_ERROR = 'DELETE_STYLE_ERROR';

export interface DeleteStyleAction {
  type: typeof DELETE_STYLE;
  payload: any;
}
export interface DeleteStyleActionSuccess {
  type: typeof DELETE_STYLE_SUCCESS;
  payload: boolean;
}
export interface DeleteStyleActionError {
  type: typeof DELETE_STYLE_ERROR;
  payload: AppError;
}
export type DeleteStyleActionTypes = DeleteStyleAction | DeleteStyleActionSuccess | DeleteStyleActionError;
