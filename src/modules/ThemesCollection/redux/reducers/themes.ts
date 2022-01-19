import { TypePagination } from 'commons/type';
import { SortValue } from 'graphql/generated/graphql';
import { ThemesActionTypes, ThemesState, THEMES, THEMES_SUCCESS, THEMES_ERROR } from '../action-types';

const initialState: ThemesState = {
  loading: false,
  pagination: {
    skip: TypePagination.DEFAULT_SKIP,
    limit: TypePagination.DEFAULT_LIMIT,
  },
  where: {
    filter: [],
    sort: [
      { key: 'title', value: SortValue.Asc },
      { key: 'code3D', value: SortValue.Asc },
      { key: 'price', value: SortValue.Asc },
    ],
  },
  dataThemes: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: ThemesActionTypes): ThemesState => {
  switch (action.type) {
    case THEMES:
      return {
        ...state,
        loading: true,
      };

    case THEMES_SUCCESS:
      return {
        ...state,
        loading: false,
        pagination: action.payload.pagination,
        where: action.payload.where,
        dataThemes: action.payload.dataThemes,
      };
    case THEMES_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
