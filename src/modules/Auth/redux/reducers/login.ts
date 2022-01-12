import {
  LoginActionTypes,
  LoginState,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  ME_ACTION,
  ME_ACTION_SUCCESS,
  ME_ACTION_ERROR,
} from '../action-types/login';

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
        loading: true,
      };
    case ME_ACTION_SUCCESS:
      return {
        ...state,
        loading: true,
        userInfo: action.payload,
      };
    case ME_ACTION_ERROR:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
