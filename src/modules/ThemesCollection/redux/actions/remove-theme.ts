import { AppError } from 'commons/type';
import { RemoveTheme, RemoveThemeVariables } from 'graphql/generated/graphql';
import { RemoveThemeActionTypes, REMOVE_THEME, REMOVE_THEME_ERROR, REMOVE_THEME_SUCCESS } from '../action-types';

export const actionRemoveTheme = (payload: RemoveThemeVariables): RemoveThemeActionTypes => ({
  type: REMOVE_THEME,
  payload,
});

export const actionRemoveThemeError = (payload: AppError): RemoveThemeActionTypes => ({
  type: REMOVE_THEME_ERROR,
  payload,
});

export const actionRemoveThemeSuccess = (payload: RemoveTheme): RemoveThemeActionTypes => ({
  type: REMOVE_THEME_SUCCESS,
  payload,
});
