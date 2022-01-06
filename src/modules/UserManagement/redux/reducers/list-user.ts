import { Users } from 'graphql/generated/graphql';
import { GetListUserActionTypes, GET_LIST_USER, GET_LIST_USER_ERROR, GET_LIST_USER_SUCCESS } from '../action-types';

export interface ListUserState {
  loading: boolean;
  items: Users[];
}
const initialState: ListUserState = {
  loading: false,
  items: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: GetListUserActionTypes): ListUserState => {
  switch (action.type) {
    case GET_LIST_USER:
      return {
        ...state,
        loading: true,
      };

    case GET_LIST_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case GET_LIST_USER_ERROR:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
