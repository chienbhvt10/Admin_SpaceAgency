import {
  DeleteStyleActionTypes,
  DELETE_STYLE,
  DELETE_STYLE_SUCCESS,
  DELETE_STYLE_ERROR,
} from './../action-types/delete-style';
export interface DeleteStyleState {
  loading: boolean;
}
export const initialState: DeleteStyleState = {
  loading: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: DeleteStyleActionTypes): DeleteStyleState => {
  switch (action.type) {
    case DELETE_STYLE:
      return {
        ...state,
        loading: true,
      };
    case DELETE_STYLE_SUCCESS:
      return {
        ...state,
        loading: true,
      };
    case DELETE_STYLE_ERROR:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
