import {
  GetListStyleActionTypes,
  GET_LIST_STYLE,
  GET_LIST_STYLE_SUCCESS,
  GET_LIST_STYLE_ERROR,
} from './../action-types/list-style';
import { AppError } from 'commons/type';

export const getListStyle = (payload?: any): GetListStyleActionTypes => ({
  type: GET_LIST_STYLE,
  payload,
});
export const getListStyleSuccess = (payload: boolean): GetListStyleActionTypes => ({
  type: GET_LIST_STYLE_SUCCESS,
  payload,
});
export const getListStyleError = (payload: AppError): GetListStyleActionTypes => ({
  type: GET_LIST_STYLE_ERROR,
  payload,
});
