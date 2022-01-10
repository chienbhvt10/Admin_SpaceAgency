import { NotificationError, NotificationSuccess } from 'commons/components/Notification';
import { getNavigate } from 'helpers/history';
import { put } from 'redux-saga/effects';
import { actionLoadingSuccess } from 'redux/actions';
import { UpdateStyleAction } from '../action-types';
import { updateStyleError, updateStyleSuccess } from '../actions';

export function* updateStyleAsync(action: UpdateStyleAction) {
  try {
    const payload = false;
    if (payload) {
      yield put(updateStyleSuccess(payload));
      getNavigate('/styles-collection');
      yield put(actionLoadingSuccess());
      NotificationSuccess('Thông báo!', 'Cập nhật thành công!');
      return;
    }
    NotificationError('Thông báo!', 'Cập nhật không thành công!');
    yield put(actionLoadingSuccess());
  } catch (err: any) {
    yield put(updateStyleError(err));
  }
}
