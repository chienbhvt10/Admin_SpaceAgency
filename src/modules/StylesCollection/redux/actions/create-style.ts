import { AppError } from 'commons/type';
import { CreateCustomerVariables, CreateStyleVariables, IStyle, IUsersFields } from 'graphql/generated/graphql';
import { CreateStyleActionTypes, CREATE_STYLE, CREATE_STYLE_SUCCESS, CREATE_STYLE_ERROR } from '../action-types';

export const actionCreateStyle = (payload: CreateStyleVariables): CreateStyleActionTypes => ({
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
