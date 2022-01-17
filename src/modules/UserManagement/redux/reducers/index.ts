import { combineReducers } from 'redux';
import { UsersState, RemoveUserState, DetailUserState } from '../action-types';
import listUsers from './list-users';
import removeUser from './remove-user';
import detailUser from './detail-user';

export interface UsersModuleState {
  usersState: UsersState;
  removeUser: RemoveUserState;
  detailUser: DetailUserState;
}

export default combineReducers<UsersModuleState>({
  usersState: listUsers,
  removeUser: removeUser,
  detailUser: detailUser,
});
