import { TypeKeyFilterUser, TypePagination } from 'commons/type';
import { SortValue } from 'graphql/generated/graphql';
import {
  LIST_USERS,
  LIST_USERS_ERROR,
  LIST_USERS_SUCCESS,
  UpdateUserActionTypes,
  UPDATE_USERS,
  UPDATE_USERS_ERROR,
  UPDATE_USERS_SUCCESS,
  UsersActionTypes,
  UsersState,
} from '../action-types';

const initialState: UsersState = {
  loading: false,
  pagination: {
    skip: TypePagination.DEFAULT_SKIP,
    limit: TypePagination.DEFAULT_LIMIT,
  },
  where: {
    sort: [{ key: 'email', value: SortValue.Asc }],
    filter: [],
  },
  dataUsers: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: UsersActionTypes | UpdateUserActionTypes): UsersState => {
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
        where: action.payload.where,
      };
    case LIST_USERS_ERROR:
      return {
        ...state,
        loading: false,
      };
    case UPDATE_USERS:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case UPDATE_USERS_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
