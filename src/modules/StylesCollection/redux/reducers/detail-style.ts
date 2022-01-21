import {
  DetailStyleActionTypes,
  DetailStyleState,
  DETAIL_STYLE,
  DETAIL_STYLE_ERROR,
  DETAIL_STYLE_SUCCESS,
} from '../action-types';

const initialState: DetailStyleState = {
  loading: false,
  dataStyle: undefined,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: DetailStyleActionTypes): DetailStyleState => {
  switch (action.type) {
    case DETAIL_STYLE:
      return {
        ...state,
        loading: true,
      };

    case DETAIL_STYLE_SUCCESS:
      return {
        ...state,
        loading: false,
        dataStyle: action.payload,
      };
    case DETAIL_STYLE_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
