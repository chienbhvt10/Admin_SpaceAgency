import { AppError } from 'commons/type';
export const UPDATE_THEMES = 'UPDATE_THEMES';
export const UPDATE_THEMES_SUCCESS = 'UPDATE_THEMES_SUCCESS';
export const UPDATE_THEMES_ERROR = 'UPDATE_THEMES_ERROR';

export interface UpdateThemesState {
  loading: boolean;
}

export interface UpdateThemesAction {
  type: typeof UPDATE_THEMES;
  payload: string;
}

export interface UpdateThemesActionSuccess {
  type: typeof UPDATE_THEMES_SUCCESS;
  payload: any;
}

export interface UpdateThemesActionError {
  type: typeof UPDATE_THEMES_ERROR;
  payload: AppError;
}
export type UpdateThemesActionTypes = UpdateThemesAction | UpdateThemesActionSuccess | UpdateThemesActionError;
