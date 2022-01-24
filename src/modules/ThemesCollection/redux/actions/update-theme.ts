import { AppError } from 'commons/type';
import { UpdateTheme } from 'graphql/generated/graphql';
import {
  UpdateThemeActionTypes,
  UpdateTypeInput,
  UPDATE_THEME,
  UPDATE_THEME_ERROR,
  UPDATE_THEME_SUCCESS,
} from '../action-types';

export const actionUpdateTheme = (payload: UpdateTypeInput): UpdateThemeActionTypes => ({
  type: UPDATE_THEME,
  payload,
});

export const actionUpdateThemeError = (payload: AppError): UpdateThemeActionTypes => ({
  type: UPDATE_THEME_ERROR,
  payload,
});

export const actionUpdateThemeSuccess = (payload: UpdateTheme): UpdateThemeActionTypes => ({
  type: UPDATE_THEME_SUCCESS,
  payload,
});
