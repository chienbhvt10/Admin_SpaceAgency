import { combineReducers } from 'redux';
import { UserState } from '../action-types';
import { ListUserState } from './list-user';
import user from './user';
import listUser from './list-user';
import deleteUser, { DeleteUserState } from './delete-user';
import getUser, { GetDetailUserState } from './get-user';
import updateUser, { UpdateUserState } from './update-user';
import createUser, { CreateUserState } from './create-user';

export interface UserModuleState {
  userState: UserState;
  listUserState: ListUserState;
  deleteUserState: DeleteUserState;
  getDetailUserState: GetDetailUserState;
  updateUserState: UpdateUserState;
  createUserState: CreateUserState;
}

export default combineReducers<UserModuleState>({
  userState: user,
  listUserState: listUser,
  deleteUserState: deleteUser,
  getDetailUserState: getUser,
  updateUserState: updateUser,
  createUserState: createUser,
});
