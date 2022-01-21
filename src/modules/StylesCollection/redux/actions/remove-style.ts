import { AppError } from 'commons/type';
import { IStyle, RemoveStyleVariables } from 'graphql/generated/graphql';
import { RemoveStyleActionTypes, REMOVE_STYLE, REMOVE_STYLE_ERROR, REMOVE_STYLE_SUCCESS } from '../action-types';

export const actionRemoveStyle = (payload: RemoveStyleVariables): RemoveStyleActionTypes => ({
  type: REMOVE_STYLE,
  payload,
});

export const actionRemoveStyleError = (payload: AppError): RemoveStyleActionTypes => ({
  type: REMOVE_STYLE_ERROR,
  payload,
});

export const actionRemoveStyleSuccess = (payload: IStyle): RemoveStyleActionTypes => ({
  type: REMOVE_STYLE_SUCCESS,
  payload,
});
