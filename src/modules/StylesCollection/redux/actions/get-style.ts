import { GetStyleActionTypes, GET_STYLE, GET_STYLE_SUCCESS, GET_STYLE_ERROR } from './../action-types/get-style';
import { AppError } from 'commons/type';

export const getStyle = (payload: any): GetStyleActionTypes => ({
  type: GET_STYLE,
  payload,
});
export const getStyleSuccess = (payload: boolean): GetStyleActionTypes => ({
  type: GET_STYLE_SUCCESS,
  payload,
});
export const getStyleError = (payload: AppError): GetStyleActionTypes => ({
  type: GET_STYLE_ERROR,
  payload,
});
