import { NotificationError, NotificationSuccess } from 'commons/components/Notification';
import { put } from 'redux-saga/effects';
import { actionLoadingSuccess } from 'redux/actions';
import { DeleteStyleAction } from '../action-types';
import { deleteStyleError, deleteStyleSuccess, getListStyle } from '../actions';

export function* deleteStyleAsync(action: DeleteStyleAction) {
  try {
    const payload = false;
    if (payload) {
      yield put(getListStyle());
      yield put(deleteStyleSuccess(action.payload));
      NotificationSuccess('Thông báo!', 'Xóa thành công!');
    }
    NotificationError('Thông báo!', 'Xóa không thành công!');
    yield put(actionLoadingSuccess());
  } catch (err: any) {
    yield put(deleteStyleError(err));
  }
}
