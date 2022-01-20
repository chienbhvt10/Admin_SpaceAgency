import {
  GetStyleActionTypes,
  GET_STYLE,
  GET_STYLE_SUCCESS,
  GET_STYLE_ERROR,
  GetStyleState,
} from './../action-types/get-style';

export const initialState: GetStyleState = {
  loading: false,
  dataStyle: undefined,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: GetStyleActionTypes): GetStyleState => {
  switch (action.type) {
    case GET_STYLE:
      return {
        ...state,
        loading: true,
      };
    case GET_STYLE_SUCCESS:
      return {
        ...state,
        loading: true,
      };
    case GET_STYLE_ERROR:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
