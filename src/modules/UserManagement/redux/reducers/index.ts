import { combineReducers } from 'redux';
import { UsersState, RemoveUserState, DetailUserState, CreateUserState } from '../action-types';
import listUsers from './list-users';
import removeUser from './remove-user';
import detailUser from './detail-user';
import createUser from './create-user';

export interface UsersModuleState {
  usersState: UsersState;
  removeUser: RemoveUserState;
  detailUser: DetailUserState;
  createUser: CreateUserState;
}

export default combineReducers<UsersModuleState>({
  usersState: listUsers,
  removeUser: removeUser,
  detailUser: detailUser,
  createUser: createUser,
});
