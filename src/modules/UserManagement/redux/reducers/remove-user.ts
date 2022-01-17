import {
  RemoveUserActionTypes,
  RemoveUserState,
  REMOVE_USER,
  REMOVE_USER_ERROR,
  REMOVE_USER_SUCCESS,
} from '../action-types';

const initialState: RemoveUserState = {
  loading: false,
  dataRemoveUser: undefined,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: RemoveUserActionTypes): RemoveUserState => {
  switch (action.type) {
    case REMOVE_USER:
      return {
        ...state,
        loading: true,
      };

    case REMOVE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case REMOVE_USER_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
