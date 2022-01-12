import { ThemesActionTypes, ThemesState, THEMES, THEMES_SUCCESS, THEMES_ERROR } from '../action-types';

const initialState: ThemesState = {
  loading: false,
  pagination: {
    skip: 1,
    limit: 1000,
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
        dataThemes: action.payload,
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
