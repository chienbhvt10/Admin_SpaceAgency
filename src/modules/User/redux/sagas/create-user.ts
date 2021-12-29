import { NotificationSuccess } from 'commons/components/Notification';
import { Users } from 'graphql/generated/graphql';
import { getNavigate } from 'helpers/history';
import { put } from 'redux-saga/effects';
import { actionLoadingSuccess } from 'redux/actions';
import * as apis from '../../services/apis';
import { CreateUserAction } from '../action-types';
import { createUserError, createUserSuccess } from '../actions/create-user';
export function* createUserAsync(action: CreateUserAction) {
  try {
    const payload: Users = yield apis.createUserApi(action.payload);
    if (payload) {
      yield put(createUserSuccess(true));
      getNavigate('/user');
      NotificationSuccess('Thông báo!', 'Tạo thành công!');
      return;
    }
    NotificationSuccess('Thông báo!', 'Tạo không thành công!');
    yield put(actionLoadingSuccess());
  } catch (err: any) {
    yield put(createUserError(err));
  }
}

// export function* logoutFlow() {
//   localStorage.removeItem(TOKEN_KEY);
// }
