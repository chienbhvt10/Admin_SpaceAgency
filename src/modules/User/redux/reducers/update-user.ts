import { UpdateUserActionTypes, UPDATE_USER, UPDATE_USER_ERROR, UPDATE_USER_SUCCESS } from '../action-types';

export interface UpdateUserState {
  loading: boolean;
}
const initialState: UpdateUserState = {
  loading: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: UpdateUserActionTypes): UpdateUserState => {
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case UPDATE_USER_ERROR:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
