import {
  UpdateStyleActionTypes,
  UPDATE_STYLE,
  UPDATE_STYLE_SUCCESS,
  UPDATE_STYLE_ERROR,
} from './../action-types/update-style';
export interface UpdateStyleState {
  loading: boolean;
}
export const initialState: UpdateStyleState = {
  loading: false,
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
        loading: true,
      };
    case UPDATE_STYLE_ERROR:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
