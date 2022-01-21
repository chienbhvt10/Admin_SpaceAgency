import {
  UpdateStyleActionTypes,
  UpdateStyleState,
  UPDATE_STYLE,
  UPDATE_STYLE_ERROR,
  UPDATE_STYLE_SUCCESS,
} from '../action-types';

const initialState: UpdateStyleState = {
  loading: false,
  dataStyle: undefined,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: UpdateStyleActionTypes): UpdateStyleState => {
  switch (action.type) {
    case UPDATE_STYLE:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_STYLE_SUCCESS:
      return {
        ...state,
        loading: false,
        dataStyle: action.payload,
      };
    case UPDATE_STYLE_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
