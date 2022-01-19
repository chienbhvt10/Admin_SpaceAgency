import {
  RemoveThemeActionTypes,
  RemoveThemeState,
  REMOVE_THEME,
  REMOVE_THEME_ERROR,
  REMOVE_THEME_SUCCESS,
} from '../action-types';

const initialState: RemoveThemeState = {
  loading: false,
  dataRemoveTheme: undefined,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: RemoveThemeActionTypes): RemoveThemeState => {
  switch (action.type) {
    case REMOVE_THEME:
      return {
        ...state,
        loading: true,
      };

    case REMOVE_THEME_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case REMOVE_THEME_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
