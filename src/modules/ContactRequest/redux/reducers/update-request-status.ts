import {
  UpdateRequestStatusActionTypes,
  UpdateRequestStatusState,
  UPDATE_REQUEST_STATUS,
  UPDATE_REQUEST_STATUS_ERROR,
  UPDATE_REQUEST_STATUS_SUCCESS,
} from '../action-types';

const initialState: UpdateRequestStatusState = {
  loading: false,
  dataRequest: undefined,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: UpdateRequestStatusActionTypes): UpdateRequestStatusState => {
  switch (action.type) {
    case UPDATE_REQUEST_STATUS:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_REQUEST_STATUS_SUCCESS:
      return {
        ...state,
        loading: false,
        dataRequest: action.payload,
      };
    case UPDATE_REQUEST_STATUS_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
