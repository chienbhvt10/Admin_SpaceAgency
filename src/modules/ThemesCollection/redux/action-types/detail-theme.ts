import { AppError } from 'commons/type';
import { GetDetailThemeVariables, ITheme } from 'graphql/generated/graphql';
export const DETAIL_THEME = 'DETAIL_THEME';
export const DETAIL_THEME_SUCCESS = 'DETAIL_THEME_SUCCESS';
export const DETAIL_THEME_ERROR = 'DETAIL_THEME_ERROR';

export interface DetailThemeState {
  loading: boolean;
  dataDetailTheme?: ITheme;
}

export interface DetailThemeAction {
  type: typeof DETAIL_THEME;
  payload: GetDetailThemeVariables;
}

export interface DetailThemeActionSuccess {
  type: typeof DETAIL_THEME_SUCCESS;
  payload: ITheme;
}

export interface DetailThemeActionError {
  type: typeof DETAIL_THEME_ERROR;
  payload: AppError;
}
export type DetailThemeActionTypes = DetailThemeAction | DetailThemeActionSuccess | DetailThemeActionError;
