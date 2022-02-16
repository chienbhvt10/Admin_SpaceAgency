import { AppError } from 'commons/type';
import { IStyle } from 'graphql/generated/graphql';
import {
  CreateStyleActionTypes,
  CreateStyleInputType,
  CREATE_STYLE,
  CREATE_STYLE_ERROR,
  CREATE_STYLE_SUCCESS,
} from '../action-types';

export const actionCreateStyle = (payload: CreateStyleInputType): CreateStyleActionTypes => ({
  type: CREATE_STYLE,
  payload,
});

export const actionCreateStyleError = (payload: AppError): CreateStyleActionTypes => ({
  type: CREATE_STYLE_ERROR,
  payload,
});

export const actionCreateStyleSuccess = (payload: IStyle): CreateStyleActionTypes => ({
  type: CREATE_STYLE_SUCCESS,
  payload,
});
