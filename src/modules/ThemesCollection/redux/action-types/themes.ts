import { AppError } from 'commons/type';
import { PaginationInput, ITheme, GetListThemesVariables } from 'graphql/generated/graphql';
export const THEMES = 'THEMES';
export const THEMES_SUCCESS = 'THEMES_SUCCESS';
export const THEMES_ERROR = 'THEMES_ERROR';

export interface ThemesState {
  loading: boolean;
  pagination?: PaginationInput;
  dataThemes: ITheme[];
}

export interface ThemesAction {
  type: typeof THEMES;
  payload: GetListThemesVariables;
}

export interface ThemesActionSuccess {
  type: typeof THEMES_SUCCESS;
  payload: ITheme[];
}

export interface ThemesActionError {
  type: typeof THEMES_ERROR;
  payload: AppError;
}
export type ThemesActionTypes = ThemesAction | ThemesActionSuccess | ThemesActionError;
