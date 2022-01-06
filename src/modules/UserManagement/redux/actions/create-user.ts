import { AppError } from 'commons/type';
import { CreateUserVariables } from 'graphql/generated/graphql';
import { CreateUserActionTypes, CREATE_USER, CREATE_USER_ERROR, CREATE_USER_SUCCESS } from '../action-types';

export const createUser = (payload: CreateUserVariables): CreateUserActionTypes => ({
  type: CREATE_USER,
  payload,
});

export const createUserError = (payload: AppError): CreateUserActionTypes => ({
  type: CREATE_USER_ERROR,
  payload,
});

export const createUserSuccess = (payload: boolean): CreateUserActionTypes => ({
  type: CREATE_USER_SUCCESS,
  payload,
});
