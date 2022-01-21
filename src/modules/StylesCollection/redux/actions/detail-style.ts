import { AppError } from 'commons/type';
import { GetUserVariables, IStyle } from 'graphql/generated/graphql';
import { DetailStyleActionTypes, DETAIL_STYLE, DETAIL_STYLE_ERROR, DETAIL_STYLE_SUCCESS } from '../action-types';

export const actionDetailStyle = (payload: GetUserVariables): DetailStyleActionTypes => ({
  type: DETAIL_STYLE,
  payload,
});

export const actionDetailStyleError = (payload: AppError): DetailStyleActionTypes => ({
  type: DETAIL_STYLE_ERROR,
  payload,
});

export const actionDetailStyleSuccess = (payload: IStyle): DetailStyleActionTypes => ({
  type: DETAIL_STYLE_SUCCESS,
  payload,
});
