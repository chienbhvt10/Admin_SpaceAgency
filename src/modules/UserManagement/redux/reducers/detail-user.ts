import {
  DetailUserActionTypes,
  DetailUserState,
  DETAIL_USERS,
  DETAIL_USERS_ERROR,
  DETAIL_USERS_SUCCESS,
} from '../action-types';

const initialState: DetailUserState = {
  loading: false,
  dataUser: undefined,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: DetailUserActionTypes): DetailUserState => {
  switch (action.type) {
    case DETAIL_USERS:
      return {
        ...state,
        loading: true,
      };

    case DETAIL_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        dataUser: action.payload,
      };
    case DETAIL_USERS_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
