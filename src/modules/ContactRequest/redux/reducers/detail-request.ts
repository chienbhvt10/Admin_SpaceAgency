import {
  DetailRequestActionTypes,
  DetailRequestState,
  DETAIL_REQUEST,
  DETAIL_REQUEST_ERROR,
  DETAIL_REQUEST_SUCCESS,
} from '../action-types';

const initialState: DetailRequestState = {
  loading: false,
  dataRequest: undefined,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: DetailRequestActionTypes): DetailRequestState => {
  switch (action.type) {
    case DETAIL_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case DETAIL_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        dataRequest: action.payload,
      };
    case DETAIL_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
