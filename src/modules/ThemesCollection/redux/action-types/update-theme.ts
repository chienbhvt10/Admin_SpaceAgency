import { AppError } from 'commons/type';
import { UpdateThemeVariables } from 'graphql/generated/graphql';
export const UPDATE_THEME = 'UPDATE_THEME';
export const UPDATE_THEME_SUCCESS = 'UPDATE_THEME_SUCCESS';
export const UPDATE_THEME_ERROR = 'UPDATE_THEME_ERROR';

export interface UpdateThemeState {
  loading: boolean;
}

export interface UpdateTypeInput extends UpdateThemeVariables {
  idCategory: string;
  titleCategory: string;
  idImage: string;
  insidePreviewUrl: string;
  outsidePreviewUrl: string;
  diagramImageUrl: string;
}

export interface UpdateThemeAction {
  type: typeof UPDATE_THEME;
  payload: UpdateTypeInput;
}

export interface UpdateThemeActionSuccess {
  type: typeof UPDATE_THEME_SUCCESS;
  payload: any;
}

export interface UpdateThemeActionError {
  type: typeof UPDATE_THEME_ERROR;
  payload: AppError;
}
export type UpdateThemeActionTypes = UpdateThemeAction | UpdateThemeActionSuccess | UpdateThemeActionError;
