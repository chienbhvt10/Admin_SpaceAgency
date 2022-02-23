import { AppError } from 'commons/type';
import { IBusinessCustomer, RemoveBusinessCustomerVariables } from 'graphql/generated/graphql';
export const REMOVE_BUSINESS_CUSTOMER = 'REMOVE_BUSINESS_CUSTOMER';
export const REMOVE_BUSINESS_CUSTOMER_SUCCESS = 'REMOVE_BUSINESS_CUSTOMER_SUCCESS';
export const REMOVE_BUSINESS_CUSTOMER_ERROR = 'REMOVE_BUSINESS_CUSTOMER_ERROR';

export interface RemoveBusinessCustomerState {
  loading: boolean;
  dataRemoveBusinessCustomer?: IBusinessCustomer;
}

export interface RemoveBusinessCustomerAction {
  type: typeof REMOVE_BUSINESS_CUSTOMER;
  payload: RemoveBusinessCustomerVariables;
}

export interface RemoveBusinessCustomerActionSuccess {
  type: typeof REMOVE_BUSINESS_CUSTOMER_SUCCESS;
  payload: IBusinessCustomer;
}

export interface RemoveBusinessCustomerActionError {
  type: typeof REMOVE_BUSINESS_CUSTOMER_ERROR;
  payload: AppError;
}
export type RemoveBusinessCustomerActionTypes =
  | RemoveBusinessCustomerAction
  | RemoveBusinessCustomerActionSuccess
  | RemoveBusinessCustomerActionError;
