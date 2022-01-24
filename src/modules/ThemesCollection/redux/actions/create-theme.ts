import { AppError } from 'commons/type';
import { ITheme } from 'graphql/generated/graphql';
import {
  CreateThemeActionTypes,
  CreateTypeInput,
  CREATE_THEME,
  CREATE_THEME_ERROR,
  CREATE_THEME_SUCCESS,
} from '../action-types';

export const actionCreateTheme = (payload: CreateTypeInput): CreateThemeActionTypes => ({
  type: CREATE_THEME,
  payload,
});

export const actionCreateThemeError = (payload: AppError): CreateThemeActionTypes => ({
  type: CREATE_THEME_ERROR,
  payload,
});

export const actionCreateThemeSuccess = (payload: ITheme): CreateThemeActionTypes => ({
  type: CREATE_THEME_SUCCESS,
  payload,
});
