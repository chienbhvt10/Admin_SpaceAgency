import { AppError } from 'commons/type';
import { GetListThemesVariables } from 'graphql/generated/graphql';
import { DEFAULT_STYLES, STYLES, StylesActionTypes, StylesData, STYLES_ERROR, STYLES_SUCCESS } from '../action-types';

export const actionStyles = (payload: GetListThemesVariables): StylesActionTypes => ({
  type: STYLES,
  payload,
});

export const actionDefaultStyles = (): StylesActionTypes => ({
  type: DEFAULT_STYLES,
});

export const actionStylesError = (payload: AppError): StylesActionTypes => ({
  type: STYLES_ERROR,
  payload,
});

export const actionStylesSuccess = (payload: StylesData): StylesActionTypes => ({
  type: STYLES_SUCCESS,
  payload,
});
