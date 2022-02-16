import { AppError } from 'commons/type';
import { CreateThemeVariables, ITheme } from 'graphql/generated/graphql';
export const CREATE_THEME = 'CREATE_THEME';
export const CREATE_THEME_SUCCESS = 'CREATE_THEME_SUCCESS';
export const CREATE_THEME_ERROR = 'CREATE_THEME_ERROR';

export interface CreateThemeState {
  loading: boolean;
  dataTheme?: ITheme;
}

export interface CreateThemeInputType extends CreateThemeVariables {
  titleCategory: string;
  insidePreviewUrl: string;
  outsidePreviewUrl: string;
}

export interface CreateThemeAction {
  type: typeof CREATE_THEME;
  payload: CreateThemeInputType;
}

export interface CreateThemeActionSuccess {
  type: typeof CREATE_THEME_SUCCESS;
  payload: ITheme;
}

export interface CreateThemeActionError {
  type: typeof CREATE_THEME_ERROR;
  payload: AppError;
}
export type CreateThemeActionTypes = CreateThemeAction | CreateThemeActionSuccess | CreateThemeActionError;
