import { combineReducers } from 'redux';
import { UsersState, RemoveUserState } from '../action-types';
import listUsers from './list-users';
import removeUser from './remove-user';

export interface UsersModuleState {
  usersState: UsersState;
  removeUser: RemoveUserState;
}

export default combineReducers<UsersModuleState>({
  usersState: listUsers,
  removeUser: removeUser,
});
