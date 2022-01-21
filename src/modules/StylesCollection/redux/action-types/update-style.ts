import { AppError } from 'commons/type';
import { CreateStyleVariables, IStyle, IUsersFields } from 'graphql/generated/graphql';
export const CREATE_STYLE = 'CREATE_STYLE';
export const CREATE_STYLE_SUCCESS = 'CREATE_STYLE_SUCCESS';
export const CREATE_STYLE_ERROR = 'CREATE_STYLE_ERROR';

export interface CreateStyleState {
  loading: boolean;
  dataStyle?: IStyle;
}

export interface CreateStyleAction {
  type: typeof CREATE_STYLE;
  payload: CreateStyleVariables;
}

export interface CreateStyleActionSuccess {
  type: typeof CREATE_STYLE_SUCCESS;
  payload: IStyle;
}

export interface CreateStyleActionError {
  type: typeof CREATE_STYLE_ERROR;
  payload: AppError;
}
export type CreateStyleActionTypes = CreateStyleAction | CreateStyleActionSuccess | CreateStyleActionError;
