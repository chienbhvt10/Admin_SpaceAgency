import {
  ACTION_RESET_FILTER,
  ACTION_RESET_FILTER_SUCCESS,
  ResetFilterActionTypes,
  ResetFilterState,
} from 'redux/action-types';

const initialState = {
  isReset: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: ResetFilterActionTypes): ResetFilterState => {
  switch (action.type) {
    case ACTION_RESET_FILTER:
      return {
        isReset: true,
      };

    case ACTION_RESET_FILTER_SUCCESS:
      return {
        isReset: false,
      };
    default:
      return state;
  }
};
