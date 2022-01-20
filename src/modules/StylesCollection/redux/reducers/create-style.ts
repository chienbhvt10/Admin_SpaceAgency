import {
  CreateStyleActionTypes,
  CREATE_STYLE,
  CREATE_STYLE_SUCCESS,
  CREATE_STYLE_ERROR,
  CreateStyleState,
} from './../action-types/create-style';

export const initialState: CreateStyleState = {
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
        loading: true,
      };
    case CREATE_STYLE_ERROR:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
