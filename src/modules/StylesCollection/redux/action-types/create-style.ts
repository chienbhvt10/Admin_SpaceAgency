import { AppError } from 'commons/type';

export const CREATE_STYLE = 'CREATE_STYLE';
export const CREATE_STYLE_SUCCESS = 'CREATE_STYLE_SUCCESS';
export const CREATE_STYLE_ERROR = 'CREATE_STYLE_ERROR';

export interface CreateStyleAction {
  type: typeof CREATE_STYLE;
  payload: any;
}
export interface CreateStyleActionSuccess {
  type: typeof CREATE_STYLE_SUCCESS;
  payload: boolean;
}
export interface CreateStyleActionError {
  type: typeof CREATE_STYLE_ERROR;
  payload: AppError;
}
export type CreateStyleActionTypes = CreateStyleAction | CreateStyleActionSuccess | CreateStyleActionError;
