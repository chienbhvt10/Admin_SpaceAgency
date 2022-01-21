import { AppError } from 'commons/type';
import { IStyle, IUsersFields, UpdateStyleVariables } from 'graphql/generated/graphql';
import { UpdateStyleActionTypes, UPDATE_STYLE, UPDATE_STYLE_ERROR, UPDATE_STYLE_SUCCESS } from '../action-types';

export const actionUpdateStyle = (payload: UpdateStyleVariables): UpdateStyleActionTypes => ({
  type: UPDATE_STYLE,
  payload,
});

export const actionUpdateStyleError = (payload: AppError): UpdateStyleActionTypes => ({
  type: UPDATE_STYLE_ERROR,
  payload,
});

export const actionUpdateStyleSuccess = (payload: IStyle): UpdateStyleActionTypes => ({
  type: UPDATE_STYLE_SUCCESS,
  payload,
});
