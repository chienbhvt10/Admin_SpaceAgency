import { AppError } from 'commons/type';
import { IUsersFields, RemoveUserVariables, RemoveTheme, RemoveThemeVariables } from 'graphql/generated/graphql';
export const REMOVE_THEME = 'REMOVE_THEME';
export const REMOVE_THEME_SUCCESS = 'REMOVE_THEME_SUCCESS';
export const REMOVE_THEME_ERROR = 'REMOVE_THEME_ERROR';

export interface RemoveThemeState {
  loading: boolean;
  dataRemoveTheme?: RemoveTheme;
}

export interface RemoveThemeAction {
  type: typeof REMOVE_THEME;
  payload: RemoveThemeVariables;
}

export interface RemoveThemeActionSuccess {
  type: typeof REMOVE_THEME_SUCCESS;
  payload: RemoveTheme;
}

export interface RemoveThemeActionError {
  type: typeof REMOVE_THEME_ERROR;
  payload: AppError;
}
export type RemoveThemeActionTypes = RemoveThemeAction | RemoveThemeActionSuccess | RemoveThemeActionError;
