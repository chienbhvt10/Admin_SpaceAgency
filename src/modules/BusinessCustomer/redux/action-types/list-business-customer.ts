import { AppError } from 'commons/type';
import {
  GetListBusinessCustomersVariables,
  IBusinessCustomer,
  PaginationInput,
  WhereInput,
} from 'graphql/generated/graphql';
export const LIST_BUSINESS_CUSTOMERS = 'LIST_BUSINESS_CUSTOMERS';
export const LIST_BUSINESS_CUSTOMERS_SUCCESS = 'LIST_BUSINESS_CUSTOMERS_SUCCESS';
export const LIST_BUSINESS_CUSTOMERS_ERROR = 'LIST_BUSINESS_CUSTOMERS_ERROR';

export interface BusinessCustomersData {
  dataBusinessCustomers: IBusinessCustomer[];
  pagination?: PaginationInput;
  total?: number;
  where?: WhereInput;
}
export interface BusinessCustomersState {
  loading: boolean;
  pagination: PaginationInput;
  where?: WhereInput;
  total?: number;
  dataBusinessCustomers: IBusinessCustomer[];
}

export interface BusinessCustomersAction {
  type: typeof LIST_BUSINESS_CUSTOMERS;
  payload: GetListBusinessCustomersVariables;
}

export interface BusinessCustomersActionSuccess {
  type: typeof LIST_BUSINESS_CUSTOMERS_SUCCESS;
  payload: BusinessCustomersData;
}

export interface BusinessCustomersActionError {
  type: typeof LIST_BUSINESS_CUSTOMERS_ERROR;
  payload: AppError;
}
export type BusinessCustomersActionTypes =
  | BusinessCustomersAction
  | BusinessCustomersActionSuccess
  | BusinessCustomersActionError;
