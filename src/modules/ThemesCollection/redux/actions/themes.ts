import { AppError } from 'commons/type';
import { GetListThemesVariables } from 'graphql/generated/graphql';
import { ThemesActionTypes } from '../action-types';
import { THEMES, ThemesData, THEMES_ERROR, THEMES_SUCCESS, DEFAULT_THEMES } from '../action-types/themes';

export const actionThemes = (payload: GetListThemesVariables): ThemesActionTypes => ({
  type: THEMES,
  payload,
});

export const actionDefaultThemes = (): ThemesActionTypes => ({
  type: DEFAULT_THEMES,
});

export const actionThemesError = (payload: AppError): ThemesActionTypes => ({
  type: THEMES_ERROR,
  payload,
});

export const actionThemesSuccess = (payload: ThemesData): ThemesActionTypes => ({
  type: THEMES_SUCCESS,
  payload,
});
