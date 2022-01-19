import { AppError } from 'commons/type';
import { GetDetailThemeVariables, ITheme } from 'graphql/generated/graphql';
import { DetailThemeActionTypes, DETAIL_THEME, DETAIL_THEME_ERROR, DETAIL_THEME_SUCCESS } from '../action-types';

export const actionDetailTheme = (payload: GetDetailThemeVariables): DetailThemeActionTypes => ({
  type: DETAIL_THEME,
  payload,
});

export const actionDetailThemeError = (payload: AppError): DetailThemeActionTypes => ({
  type: DETAIL_THEME_ERROR,
  payload,
});

export const actionDetailThemeSuccess = (payload: ITheme): DetailThemeActionTypes => ({
  type: DETAIL_THEME_SUCCESS,
  payload,
});
