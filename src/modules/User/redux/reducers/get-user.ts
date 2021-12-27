import { Users } from 'graphql/generated/graphql';
import {
  GetDetailUserActionTypes,
  GET_DETAIL_USER,
  GET_DETAIL_USER_ERROR,
  GET_DETAIL_USER_SUCCESS,
} from '../action-types';
export interface GetDetailUserState {
  loading: boolean;
  item?: Users;
}
const initialState: GetDetailUserState = {
  loading: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: GetDetailUserActionTypes): GetDetailUserState => {
  switch (action.type) {
    case GET_DETAIL_USER:
      return {
        ...state,
        loading: true,
      };

    case GET_DETAIL_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        item: action.payload,
      };
    case GET_DETAIL_USER_ERROR:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
