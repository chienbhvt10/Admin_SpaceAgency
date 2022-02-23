import { combineReducers } from 'redux';
import { BusinessCustomersState, RemoveBusinessCustomerState } from '../action-types';
import businessCustomers from './list-business-customer';
import removeAppointment from './remove-business-customer';

export interface BusinessCustomerModuleState {
  businessCustomersState: BusinessCustomersState;
  removeBusinessCustomerState: RemoveBusinessCustomerState;
}

export default combineReducers<BusinessCustomerModuleState>({
  businessCustomersState: businessCustomers,
  removeBusinessCustomerState: removeAppointment,
});
