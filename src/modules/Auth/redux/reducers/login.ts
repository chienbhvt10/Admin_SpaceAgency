import { LoginActionTypes, LoginState, LOGIN, LOGIN_SUCCESS, LOGIN_ERROR, ME_ACTION } from '../action-types/login';

const initialState = {
  loading: false,
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
        loading: false,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
      };
    case ME_ACTION:
      return {
        ...state,
        userInfo: action.payload,
      };
    default:
      return state;
  }
};
