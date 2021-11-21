import { combineReducers } from 'redux';
import { LoginState } from '../action-types';
import login from './login';

export interface AuthModuleState {
  loginState: LoginState;
}

export default combineReducers<AuthModuleState>({
  loginState: login,
});