import {
  RemoveBusinessCustomerActionTypes,
  RemoveBusinessCustomerState,
  REMOVE_BUSINESS_CUSTOMER,
  REMOVE_BUSINESS_CUSTOMER_ERROR,
  REMOVE_BUSINESS_CUSTOMER_SUCCESS,
} from '../action-types';

const initialState: RemoveBusinessCustomerState = {
  loading: false,
  dataRemoveBusinessCustomer: undefined,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: RemoveBusinessCustomerActionTypes): RemoveBusinessCustomerState => {
  switch (action.type) {
    case REMOVE_BUSINESS_CUSTOMER:
      return {
        ...state,
        loading: true,
      };

    case REMOVE_BUSINESS_CUSTOMER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case REMOVE_BUSINESS_CUSTOMER_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
