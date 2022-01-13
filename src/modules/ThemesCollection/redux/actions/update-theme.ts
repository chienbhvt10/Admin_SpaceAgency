import { AppError } from 'commons/type';
import { ITheme, GetListThemesVariables } from 'graphql/generated/graphql';
import { ThemesActionTypes } from '../action-types';
import { THEMES, THEMES_ERROR, THEMES_SUCCESS } from '../action-types/themes';

export const actionThemes = (payload: GetListThemesVariables): ThemesActionTypes => ({
  type: THEMES,
  payload,
});

export const actionThemesError = (payload: AppError): ThemesActionTypes => ({
  type: THEMES_ERROR,
  payload,
});

export const actionThemesSuccess = (payload: ITheme[]): ThemesActionTypes => ({
  type: THEMES_SUCCESS,
  payload,
});
