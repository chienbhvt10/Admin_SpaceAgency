import { GetUserActionTypes, UserState, GET_USER, GET_USER_SUCCESS, GET_USER_ERROR } from '../action-types';

const initialState = {
  loading: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: GetUserActionTypes): UserState => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        loading: true,
      };

    case GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case GET_USER_ERROR:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
