import { combineReducers } from 'redux';
import { UserState } from '../action-types';
import { ListUserState } from './list-user';
import user from './user';
import listUser from './list-user';

export interface UserModuleState {
  userState: UserState;
  listUserState: ListUserState;
}

export default combineReducers<UserModuleState>({
  userState: user,
  listUserState: listUser,
});
