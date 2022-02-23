import { all, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../action-types';
import { getListBusinessCustomersAsync } from './list-business-customer';
import { removeBusinessCustomerAsync } from './remove-business-customer';
export default function* root() {
  yield all([takeLatest(actionTypes.LIST_BUSINESS_CUSTOMERS, getListBusinessCustomersAsync)]);
  yield all([takeLatest(actionTypes.REMOVE_BUSINESS_CUSTOMER, removeBusinessCustomerAsync)]);
}
