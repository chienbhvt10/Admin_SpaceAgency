import {
  DetailThemeActionTypes,
  DetailThemeState,
  DETAIL_THEME,
  DETAIL_THEME_ERROR,
  DETAIL_THEME_SUCCESS,
} from '../action-types';

const initialState: DetailThemeState = {
  loading: false,
  dataDetailTheme: undefined,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: DetailThemeActionTypes): DetailThemeState => {
  switch (action.type) {
    case DETAIL_THEME:
      return {
        ...state,
        loading: true,
      };

    case DETAIL_THEME_SUCCESS:
      return {
        ...state,
        loading: false,
        dataDetailTheme: action.payload,
      };
    case DETAIL_THEME_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
