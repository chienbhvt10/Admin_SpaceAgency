import {
  DeleteStyleActionTypes,
  DELETE_STYLE,
  DELETE_STYLE_SUCCESS,
  DELETE_STYLE_ERROR,
} from './../action-types/delete-style';
import { AppError } from 'commons/type';

export const deleteStyle = (payload: any): DeleteStyleActionTypes => ({
  type: DELETE_STYLE,
  payload,
});
export const deleteStyleSuccess = (payload: boolean): DeleteStyleActionTypes => ({
  type: DELETE_STYLE_SUCCESS,
  payload,
});
export const deleteStyleError = (payload: AppError): DeleteStyleActionTypes => ({
  type: DELETE_STYLE_ERROR,
  payload,
});
