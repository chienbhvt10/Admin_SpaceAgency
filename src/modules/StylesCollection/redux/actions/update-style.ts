import {
  UpdateStyleActionTypes,
  UPDATE_STYLE,
  UPDATE_STYLE_SUCCESS,
  UPDATE_STYLE_ERROR,
} from './../action-types/update-style';
import { AppError } from 'commons/type';
import { IStyleFields, UpdateStyleVariables } from 'graphql/generated/graphql';

export const updateStyle = (payload: UpdateStyleVariables): UpdateStyleActionTypes => ({
  type: UPDATE_STYLE,
  payload,
});
export const updateStyleSuccess = (payload: IStyleFields): UpdateStyleActionTypes => ({
  type: UPDATE_STYLE_SUCCESS,
  payload,
});
export const updateStyleError = (payload: AppError): UpdateStyleActionTypes => ({
  type: UPDATE_STYLE_ERROR,
  payload,
});
