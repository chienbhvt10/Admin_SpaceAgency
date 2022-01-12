import { AppError } from 'commons/type';
import { Themes, ThemesVariables } from 'graphql/generated/graphql';
import { ThemesActionTypes } from '../action-types';
import { THEMES, THEMES_ERROR, THEMES_SUCCESS } from '../action-types/themes';

export const themes = (payload: ThemesVariables): ThemesActionTypes => ({
  type: THEMES,
  payload,
});

export const themesError = (payload: AppError): ThemesActionTypes => ({
  type: THEMES_ERROR,
  payload,
});

export const themesSuccess = (payload: Themes): ThemesActionTypes => ({
  type: THEMES_SUCCESS,
  payload,
});
