import { getNavigate } from 'helpers/history';
import { put } from 'redux-saga/effects';
import { actionLoadingSuccess } from 'redux/actions';
import * as apis from '../../services/apis';
import { UpdateUserAction } from '../action-types';
import { updateUserError, updateUserSuccess } from '../actions';
import { NotificationSuccess } from 'commons/components/Notification';

export function* updateUserAsync(action: UpdateUserAction) {
  try {
    const payload: boolean = yield apis.updateUserApi(action.payload);
    if (payload) {
      yield put(updateUserSuccess(payload));
      getNavigate('/user');
      yield put(actionLoadingSuccess());
      NotificationSuccess('Thông báo!', 'Cập nhật thành công!');
      return;
    }
    NotificationSuccess('Thông báo!', 'Cập nhật không thành công!');
    yield put(actionLoadingSuccess());
  } catch (err: any) {
    yield put(updateUserError(err));
  }
}

// export function* logoutFlow() {
//   localStorage.removeItem(TOKEN_KEY);
// }
