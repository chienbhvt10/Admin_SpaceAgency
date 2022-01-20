import {
  GetListStyleActionTypes,
  GET_LIST_STYLE,
  GET_LIST_STYLE_SUCCESS,
  GET_LIST_STYLE_ERROR,
  StyleData,
} from './../action-types/list-style';
import { AppError } from 'commons/type';
import { GetListStyleVariables } from 'graphql/generated/graphql';

export const getListStyle = (payload: GetListStyleVariables): GetListStyleActionTypes => ({
  type: GET_LIST_STYLE,
  payload,
});
export const getListStyleSuccess = (payload: StyleData): GetListStyleActionTypes => ({
  type: GET_LIST_STYLE_SUCCESS,
  payload,
});
export const getListStyleError = (payload: AppError): GetListStyleActionTypes => ({
  type: GET_LIST_STYLE_ERROR,
  payload,
});
