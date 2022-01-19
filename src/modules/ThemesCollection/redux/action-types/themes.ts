import { AppError } from 'commons/type';
import { PaginationInput, ITheme, GetListThemesVariables, WhereInput } from 'graphql/generated/graphql';
export const THEMES = 'THEMES';
export const THEMES_SUCCESS = 'THEMES_SUCCESS';
export const THEMES_ERROR = 'THEMES_ERROR';
export interface ThemesData {
  pagination?: PaginationInput;
  where?: WhereInput;
  dataThemes: ITheme[];
}
export interface ThemesState {
  loading: boolean;
  pagination?: PaginationInput;
  where?: WhereInput;
  dataThemes: ITheme[];
}

export interface ThemesAction {
  type: typeof THEMES;
  payload: GetListThemesVariables;
}

export interface ThemesActionSuccess {
  type: typeof THEMES_SUCCESS;
  payload: ThemesData;
}

export interface ThemesActionError {
  type: typeof THEMES_ERROR;
  payload: AppError;
}
export type ThemesActionTypes = ThemesAction | ThemesActionSuccess | ThemesActionError;
