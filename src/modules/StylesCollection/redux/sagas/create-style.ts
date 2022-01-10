import { NotificationSuccess } from 'commons/components/Notification';
import { getNavigate } from 'helpers/history';
import { put } from 'redux-saga/effects';
import { actionLoadingSuccess } from 'redux/actions';
import { CreateStyleAction } from '../action-types';
import { createStyleError, createStyleSuccess } from '../actions';

export function* createStyleAsync(action: CreateStyleAction) {
  try {
    const payload = true;
    if (payload) {
      yield put(createStyleSuccess(payload));
      getNavigate('/styles-collection');
      NotificationSuccess('Thông báo!', 'Tạo thành công!');
      return;
    }
    NotificationSuccess('Thông báo!', 'Tạo không thành công!');
    yield put(actionLoadingSuccess());
  } catch (err: any) {
    yield put(createStyleError(err));
  }
}
