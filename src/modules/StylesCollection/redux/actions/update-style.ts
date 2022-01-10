import {
  UpdateStyleActionTypes,
  UPDATE_STYLE,
  UPDATE_STYLE_SUCCESS,
  UPDATE_STYLE_ERROR,
} from './../action-types/update-style';
import { AppError } from 'commons/type';

export const updateStyle = (payload: any): UpdateStyleActionTypes => ({
  type: UPDATE_STYLE,
  payload,
});
export const updateStyleSuccess = (payload: boolean): UpdateStyleActionTypes => ({
  type: UPDATE_STYLE_SUCCESS,
  payload,
});
export const updateStyleError = (payload: AppError): UpdateStyleActionTypes => ({
  type: UPDATE_STYLE_ERROR,
  payload,
});
