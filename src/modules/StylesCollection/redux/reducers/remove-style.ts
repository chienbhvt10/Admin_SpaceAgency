import {
  RemoveStyleActionTypes,
  RemoveStyleState,
  REMOVE_STYLE,
  REMOVE_STYLE_ERROR,
  REMOVE_STYLE_SUCCESS,
} from '../action-types';

const initialState: RemoveStyleState = {
  loading: false,
  dataRemoveStyle: undefined,
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
        loading: false,
      };
    case REMOVE_STYLE_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
