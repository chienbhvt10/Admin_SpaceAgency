import { TypePagination } from 'commons/type';
import { SortValue } from 'graphql/generated/graphql';
import { StylesActionTypes, StylesState, STYLES, STYLES_SUCCESS, STYLES_ERROR } from '../action-types';

const initialState: StylesState = {
  loading: false,
  pagination: {
    skip: TypePagination.DEFAULT_SKIP,
    limit: TypePagination.DEFAULT_LIMIT,
  },
  where: {
    filter: [],
    sort: [
      { key: 'title', value: SortValue.Asc },
      { key: 'theme', value: SortValue.Asc },
      { key: 'order', value: SortValue.Asc },
      { key: 'code3d', value: SortValue.Asc },
      { key: 'price', value: SortValue.Asc },
    ],
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
