import { TypePagination } from 'commons/type';
import {
  LIST_BUSINESS_CUSTOMERS,
  LIST_BUSINESS_CUSTOMERS_ERROR,
  LIST_BUSINESS_CUSTOMERS_SUCCESS,
  BusinessCustomersActionTypes,
  BusinessCustomersState,
} from '../action-types';

const initialState: BusinessCustomersState = {
  loading: false,
  pagination: {
    skip: TypePagination.DEFAULT_SKIP,
    limit: TypePagination.DEFAULT_LIMIT,
  },
  where: {
    filter: [],
    sort: [],
  },
  dataBusinessCustomers: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: BusinessCustomersActionTypes): BusinessCustomersState => {
  switch (action.type) {
    case LIST_BUSINESS_CUSTOMERS:
      return {
        ...state,
        loading: true,
      };

    case LIST_BUSINESS_CUSTOMERS_SUCCESS:
      return {
        ...state,
        loading: false,
        pagination: {
          skip: action.payload.pagination?.skip,
          limit: action.payload.pagination?.limit,
        },
        where: action.payload.where,
        total: action.payload.total,
        dataBusinessCustomers: action.payload.dataBusinessCustomers,
      };
    case LIST_BUSINESS_CUSTOMERS_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
