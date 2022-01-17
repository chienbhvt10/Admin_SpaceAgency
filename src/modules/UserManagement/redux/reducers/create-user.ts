import {
  CreateUserActionTypes,
  CreateUserState,
  CREATE_USERS,
  CREATE_USERS_ERROR,
  CREATE_USERS_SUCCESS,
} from '../action-types';

const initialState: CreateUserState = {
  loading: false,
  dataUser: undefined,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: CreateUserActionTypes): CreateUserState => {
  switch (action.type) {
    case CREATE_USERS:
      return {
        ...state,
        loading: true,
      };

    case CREATE_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        dataUser: action.payload,
      };
    case CREATE_USERS_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
