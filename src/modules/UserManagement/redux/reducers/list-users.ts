import { Role } from 'graphql/generated/graphql';
import { UsersActionTypes, UsersState, LIST_USERS, LIST_USERS_SUCCESS, LIST_USERS_ERROR } from '../action-types';

const initialState: UsersState = {
  loading: false,
  pagination: {
    skip: 0,
    limit: 15,
  },
  dataUsers: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: UsersActionTypes): UsersState => {
  switch (action.type) {
    case LIST_USERS:
      return {
        ...state,
        loading: true,
      };

    case LIST_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        dataUsers: action.payload.dataUsers,
        pagination: {
          skip: action.payload.pagination?.skip,
          limit: action.payload.pagination?.limit,
        },
      };
    case LIST_USERS_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
