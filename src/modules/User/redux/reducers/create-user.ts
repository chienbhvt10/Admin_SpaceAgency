import { CreateUserActionTypes, CREATE_USER, CREATE_USER_ERROR, CREATE_USER_SUCCESS } from '../action-types';

export interface CreateUserState {
  loading: boolean;
}
const initialState: CreateUserState = {
  loading: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: CreateUserActionTypes): CreateUserState => {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        loading: true,
      };

    case CREATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case CREATE_USER_ERROR:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
