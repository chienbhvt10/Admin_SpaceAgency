import { DeleteUserActionTypes, DELETE_USER, DELETE_USER_ERROR, DELETE_USER_SUCCESS } from '../action-types';

export interface DeleteUserState {
  loading: boolean;
  id: string;
}
const initialState: DeleteUserState = {
  loading: false,
  id: '',
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: DeleteUserActionTypes): DeleteUserState => {
  switch (action.type) {
    case DELETE_USER:
      return {
        ...state,
        loading: true,
      };

    case DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        id: action.payload,
      };
    case DELETE_USER_ERROR:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
