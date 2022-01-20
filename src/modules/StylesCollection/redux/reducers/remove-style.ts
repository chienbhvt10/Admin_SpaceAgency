import {
  RemoveStyleActionTypes,
  REMOVE_STYLE,
  REMOVE_STYLE_SUCCESS,
  REMOVE_STYLE_ERROR,
  RemoveStyleState,
} from '../action-types/remove-style';

export const initialState: RemoveStyleState = {
  loading: false,
  dataStyles: undefined,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: RemoveStyleActionTypes): RemoveStyleState => {
  switch (action.type) {
    case REMOVE_STYLE:
      return {
        ...state,
        loading: true,
      };
    case REMOVE_STYLE_SUCCESS:
      return {
        ...state,
        loading: true,
      };
    case REMOVE_STYLE_ERROR:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
