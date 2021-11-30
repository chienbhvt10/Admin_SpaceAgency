import {
  ACTION_LOADING,
  ACTION_LOADING_ERROR,
  ACTION_LOADING_SUCCESS,
  LoadingActionTypes,
  LoadingState,
} from 'redux/action-types';

const initialState = {
  loading: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: LoadingActionTypes): LoadingState => {
  switch (action.type) {
    case ACTION_LOADING:
      return {
        ...state,
        loading: true,
      };

    case ACTION_LOADING_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case ACTION_LOADING_ERROR:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
