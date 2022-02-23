import { AppError } from 'commons/type';
import { GetListBusinessCustomersVariables } from 'graphql/generated/graphql';
import {
  LIST_BUSINESS_CUSTOMERS,
  LIST_BUSINESS_CUSTOMERS_ERROR,
  LIST_BUSINESS_CUSTOMERS_SUCCESS,
  BusinessCustomersActionTypes,
  BusinessCustomersData,
} from '../action-types';

export const actionBusinessCustomers = (payload: GetListBusinessCustomersVariables): BusinessCustomersActionTypes => ({
  type: LIST_BUSINESS_CUSTOMERS,
  payload,
});

export const actionBusinessCustomersError = (payload: AppError): BusinessCustomersActionTypes => ({
  type: LIST_BUSINESS_CUSTOMERS_ERROR,
  payload,
});

export const actionBusinessCustomersSuccess = (payload: BusinessCustomersData): BusinessCustomersActionTypes => ({
  type: LIST_BUSINESS_CUSTOMERS_SUCCESS,
  payload,
});
