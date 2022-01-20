import { TypePagination } from 'commons/type';
import {
  GetListStyleActionTypes,
  GET_LIST_STYLE,
  GET_LIST_STYLE_SUCCESS,
  GET_LIST_STYLE_ERROR,
  StyleState,
} from './../action-types/list-style';

export const initialState: StyleState = {
  loading: false,
  pagination: {
    skip: TypePagination.DEFAULT_SKIP,
    limit: TypePagination.DEFAULT_LIMIT,
  },
  where: {
    sort: [],
    filter: [],
  },
  dataStyles: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: GetListStyleActionTypes): StyleState => {
  switch (action.type) {
    case GET_LIST_STYLE:
      return {
        ...state,
        loading: true,
      };
    case GET_LIST_STYLE_SUCCESS:
      return {
        ...state,
        loading: true,
      };
    case GET_LIST_STYLE_ERROR:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
