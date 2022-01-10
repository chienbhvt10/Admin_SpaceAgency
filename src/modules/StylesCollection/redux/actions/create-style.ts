import {
  CreateStyleActionTypes,
  CREATE_STYLE,
  CREATE_STYLE_SUCCESS,
  CREATE_STYLE_ERROR,
} from './../action-types/create-style';
import { AppError } from 'commons/type';

export const createStyle = (payload: any): CreateStyleActionTypes => ({
  type: CREATE_STYLE,
  payload,
});
export const createStyleSuccess = (payload: boolean): CreateStyleActionTypes => ({
  type: CREATE_STYLE_SUCCESS,
  payload,
});
export const createStyleError = (payload: AppError): CreateStyleActionTypes => ({
  type: CREATE_STYLE_ERROR,
  payload,
});
