import {
  GetListStyleActionTypes,
  GET_LIST_STYLE,
  GET_LIST_STYLE_SUCCESS,
  GET_LIST_STYLE_ERROR,
} from './../action-types/list-style';
export interface GetListStyleState {
  loading: boolean;
}
export const initialState: GetListStyleState = {
  loading: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: GetListStyleActionTypes): GetListStyleState => {
  switch (action.type) {
    case GET_LIST_STYLE:
      return {
        ...state,
        loading: true,
      };
    case GET_LIST_STYLE_SUCCESS:
      return {
        ...state,
        loading: true,
      };
    case GET_LIST_STYLE_ERROR:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
