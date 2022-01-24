import {
  CreateThemeActionTypes,
  CreateThemeState,
  CREATE_THEME,
  CREATE_THEME_ERROR,
  CREATE_THEME_SUCCESS,
} from '../action-types';

const initialState: CreateThemeState = {
  loading: false,
  dataTheme: undefined,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: CreateThemeActionTypes): CreateThemeState => {
  switch (action.type) {
    case CREATE_THEME:
      return {
        ...state,
        loading: true,
      };

    case CREATE_THEME_SUCCESS:
      return {
        ...state,
        loading: false,
        dataTheme: action.payload,
      };
    case CREATE_THEME_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
