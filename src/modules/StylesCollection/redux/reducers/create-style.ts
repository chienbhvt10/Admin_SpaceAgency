import {
  CreateStyleActionTypes,
  CreateStyleState,
  CREATE_STYLE,
  CREATE_STYLE_ERROR,
  CREATE_STYLE_SUCCESS,
} from '../action-types';

const initialState: CreateStyleState = {
  loading: false,
  dataStyle: undefined,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: CreateStyleActionTypes): CreateStyleState => {
  switch (action.type) {
    case CREATE_STYLE:
      return {
        ...state,
        loading: true,
      };

    case CREATE_STYLE_SUCCESS:
      return {
        ...state,
        loading: false,
        dataStyle: action.payload,
      };
    case CREATE_STYLE_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
