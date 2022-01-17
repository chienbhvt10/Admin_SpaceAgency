import { AppError } from 'commons/type';
import { CreateCustomerVariables, IUsersFields } from 'graphql/generated/graphql';
import { CreateUserActionTypes, CREATE_USERS, CREATE_USERS_SUCCESS, CREATE_USERS_ERROR } from '../action-types';

export const actionCreateUser = (payload: CreateCustomerVariables): CreateUserActionTypes => ({
  type: CREATE_USERS,
  payload,
});

export const actionCreateUserError = (payload: AppError): CreateUserActionTypes => ({
  type: CREATE_USERS_ERROR,
  payload,
});

export const actionCreateUserSuccess = (payload: IUsersFields): CreateUserActionTypes => ({
  type: CREATE_USERS_SUCCESS,
  payload,
});
