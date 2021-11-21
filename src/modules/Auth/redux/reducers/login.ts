import { getAuthLocalData } from 'helpers/token';
import { LoginActionTypes, LoginState, LOGIN, LOGIN_SUCCESS, LOGIN_ERROR } from '../action-types/login';

const initialState = {
  loading: !!getAuthLocalData(),
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: LoginActionTypes): LoginState => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loading: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        userInfo: {
          ...action.payload,
        },
        loading: false,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};