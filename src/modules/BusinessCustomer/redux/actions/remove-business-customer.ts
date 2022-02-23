import { AppError } from 'commons/type';
import { IBusinessCustomer, RemoveBusinessCustomerVariables } from 'graphql/generated/graphql';
import {
  RemoveBusinessCustomerActionTypes,
  REMOVE_BUSINESS_CUSTOMER,
  REMOVE_BUSINESS_CUSTOMER_ERROR,
  REMOVE_BUSINESS_CUSTOMER_SUCCESS,
} from '../action-types';

export const actionRemoveBusinessCustomer = (
  payload: RemoveBusinessCustomerVariables,
): RemoveBusinessCustomerActionTypes => ({
  type: REMOVE_BUSINESS_CUSTOMER,
  payload,
});

export const actionRemoveBusinessCustomerError = (payload: AppError): RemoveBusinessCustomerActionTypes => ({
  type: REMOVE_BUSINESS_CUSTOMER_ERROR,
  payload,
});

export const actionRemoveBusinessCustomerSuccess = (payload: IBusinessCustomer): RemoveBusinessCustomerActionTypes => ({
  type: REMOVE_BUSINESS_CUSTOMER_SUCCESS,
  payload,
});
