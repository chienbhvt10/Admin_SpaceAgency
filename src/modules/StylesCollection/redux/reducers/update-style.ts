import { TypePagination } from 'commons/type';
import { StyleState } from '../action-types';
import {
  UpdateStyleActionTypes,
  UPDATE_STYLE,
  UPDATE_STYLE_ERROR,
  UPDATE_STYLE_SUCCESS,
} from './../action-types/update-style';

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
export default (state = initialState, action: UpdateStyleActionTypes): StyleState => {
  switch (action.type) {
    case UPDATE_STYLE:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_STYLE_SUCCESS:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_STYLE_ERROR:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
