import { combineReducers } from 'redux';
import { UserState } from '../action-types';
import user from './user';

export interface UserModuleState {
  userState: UserState;
}

export default combineReducers<UserModuleState>({
  userState: user,
});
