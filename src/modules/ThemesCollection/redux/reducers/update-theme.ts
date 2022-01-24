import {
  UpdateThemeActionTypes,
  UpdateThemeState,
  UPDATE_THEME,
  UPDATE_THEME_ERROR,
  UPDATE_THEME_SUCCESS,
} from '../action-types';

const initialState: UpdateThemeState = {
  loading: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: UpdateThemeActionTypes): UpdateThemeState => {
  switch (action.type) {
    case UPDATE_THEME:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_THEME_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case UPDATE_THEME_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
