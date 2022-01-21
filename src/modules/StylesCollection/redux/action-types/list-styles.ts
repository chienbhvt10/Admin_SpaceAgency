import { AppError } from 'commons/type';
import { GetListStylesVariables, IStyle, PaginationInput, WhereInput } from 'graphql/generated/graphql';
export const STYLES = 'STYLES';
export const DEFAULT_STYLES = 'DEFAULT_STYLES';
export const STYLES_SUCCESS = 'STYLES_SUCCESS';
export const STYLES_ERROR = 'STYLES_ERROR';
export interface StylesData {
  pagination?: PaginationInput;
  where?: WhereInput;
  dataStyles: IStyle[];
}
export interface StylesState {
  loading: boolean;
  pagination?: PaginationInput;
  where?: WhereInput;
  dataStyles?: IStyle[];
}

export interface DefaultStylesAction {
  type: typeof DEFAULT_STYLES;
}

export interface StylesAction {
  type: typeof STYLES;
  payload: GetListStylesVariables;
}

export interface StylesActionSuccess {
  type: typeof STYLES_SUCCESS;
  payload: StylesData;
}

export interface StylesActionError {
  type: typeof STYLES_ERROR;
  payload: AppError;
}
export type StylesActionTypes = StylesAction | StylesActionSuccess | StylesActionError | DefaultStylesAction;
