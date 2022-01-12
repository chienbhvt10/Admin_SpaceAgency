import { AppError } from 'commons/type';
import { PaginationInput, Themes, ThemesVariables } from 'graphql/generated/graphql';
export const THEMES = 'THEMES';
export const THEMES_SUCCESS = 'THEMES_SUCCESS';
export const THEMES_ERROR = 'THEMES_ERROR';

export interface ThemesState {
  loading: boolean;
  pagination?: PaginationInput;
}

export interface ThemesAction {
  type: typeof THEMES;
  payload: ThemesVariables;
}

export interface ThemesActionSuccess {
  type: typeof THEMES_SUCCESS;
  payload: Themes;
}

export interface ThemesActionError {
  type: typeof THEMES_ERROR;
  payload: AppError;
}
export type ThemesActionTypes = ThemesAction | ThemesActionSuccess | ThemesActionError;
