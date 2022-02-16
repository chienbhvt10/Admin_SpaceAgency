import {
  RemoveRequestActionTypes,
  RemoveRequestState,
  REMOVE_REQUEST,
  REMOVE_REQUEST_ERROR,
  REMOVE_REQUEST_SUCCESS,
} from '../action-types';

const initialState: RemoveRequestState = {
  loading: false,
  dataRemoveRequest: undefined,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: RemoveRequestActionTypes): RemoveRequestState => {
  switch (action.type) {
    case REMOVE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case REMOVE_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case REMOVE_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
