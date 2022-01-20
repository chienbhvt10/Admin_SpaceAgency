import {
  RemoveStyleActionTypes,
  REMOVE_STYLE,
  REMOVE_STYLE_SUCCESS,
  REMOVE_STYLE_ERROR,
} from '../action-types/remove-style';
import { AppError } from 'commons/type';
import { IStyle, RemoveStyleVariables } from 'graphql/generated/graphql';

export const RemoveStyle = (payload: RemoveStyleVariables): RemoveStyleActionTypes => ({
  type: REMOVE_STYLE,
  payload,
});
export const RemoveStyleSuccess = (payload: IStyle): RemoveStyleActionTypes => ({
  type: REMOVE_STYLE_SUCCESS,
  payload,
});
export const RemoveStyleError = (payload: AppError): RemoveStyleActionTypes => ({
  type: REMOVE_STYLE_ERROR,
  payload,
});
