import { AppError } from 'commons/type';
import { GetListThemesVariables } from 'graphql/generated/graphql';
import { StylesActionTypes } from '../action-types';
import { STYLES, StylesData, STYLES_ERROR, STYLES_SUCCESS } from '../action-types';

export const actionStyles = (payload: GetListThemesVariables): StylesActionTypes => ({
  type: STYLES,
  payload,
});

export const actionStylesError = (payload: AppError): StylesActionTypes => ({
  type: STYLES_ERROR,
  payload,
});

export const actionStylesSuccess = (payload: StylesData): StylesActionTypes => ({
  type: STYLES_SUCCESS,
  payload,
});
