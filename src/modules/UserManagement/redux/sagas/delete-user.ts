import { put } from 'redux-saga/effects';
import { actionLoadingSuccess } from 'redux/actions';
import * as apis from '../../services/apis';
import { DeleteUserAction } from '../action-types';
import { deleteUserSuccess, getAllUser, getAllUserError } from '../actions';
import { NotificationSuccess } from 'commons/components/Notification';
export function* deleteUserAsync(action: DeleteUserAction) {
  try {
    const payload: boolean = yield apis.deleteUserApi({ id: action.payload });
    if (payload) {
      yield put(getAllUser());
      yield put(deleteUserSuccess(action.payload));
      NotificationSuccess('Thông báo!', 'Xóa thành công!');
    } else {
      NotificationSuccess('Thông báo!', 'Xóa không thành công!');
    }
    yield put(actionLoadingSuccess());
  } catch (err: any) {
    yield put(getAllUserError(err));
  }
}

// export function* logoutFlow() {
//   localStorage.removeItem(TOKEN_KEY);
// }
