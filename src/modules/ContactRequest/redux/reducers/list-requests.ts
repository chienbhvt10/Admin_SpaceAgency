import { TypePagination } from 'commons/type';
import {
  LIST_REQUEST,
  LIST_REQUEST_ERROR,
  LIST_REQUEST_SUCCESS,
  RequestsActionTypes,
  RequestsState,
} from '../action-types';

const initialState: RequestsState = {
  loading: false,
  pagination: {
    skip: TypePagination.DEFAULT_SKIP,
    limit: TypePagination.DEFAULT_LIMIT,
  },
  where: {
    filter: [],
    sort: [],
  },
  dataRequests: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: RequestsActionTypes): RequestsState => {
  switch (action.type) {
    case LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case LIST_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        pagination: {
          skip: action.payload.pagination?.skip,
          limit: action.payload.pagination?.limit,
        },
        where: action.payload.where,
        total: action.payload.total,
        dataRequests: action.payload.dataRequests,
      };
    case LIST_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
