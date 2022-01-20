import { TypePagination } from 'commons/type';
import { STYLES, StylesActionTypes, StylesState, STYLES_ERROR, STYLES_SUCCESS } from '../action-types';

const initialState: StylesState = {
  loading: false,
  pagination: {
    skip: TypePagination.DEFAULT_SKIP,
    limit: TypePagination.DEFAULT_LIMIT,
  },
  where: {
    filter: [],
    sort: [],
  },
  dataStyles: undefined,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: StylesActionTypes): StylesState => {
  switch (action.type) {
    case STYLES:
      return {
        ...state,
        loading: true,
      };

    case STYLES_SUCCESS:
      return {
        ...state,
        loading: false,
        pagination: action.payload.pagination,
        where: action.payload.where,
        dataStyles: action.payload.dataStyles,
      };
    case STYLES_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
