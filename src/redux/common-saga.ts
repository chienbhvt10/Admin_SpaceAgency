import { put, take } from 'redux-saga/effects';
import { NotificationError, NotificationSuccess } from 'commons/components/Notification';
import { actionLoadingError } from './actions';
import { getNavigate } from 'helpers/history';
import { CommonPath } from 'commons/base-routes';
export interface ResponseGenerator {
  payload: any;
}
export function* checkErrorAsync() {
  while (true) {
    const action: ResponseGenerator = yield take((action: any) => /.+_ERROR/.test(action.type));
    if (action.payload.response.errors[0].code === 'A000') {
      getNavigate(CommonPath.LOGIN_PATH);
      return;
    }
    yield put(actionLoadingError());
    let message = action.payload.message || 'Có lỗi xảy ra vui lòng thử lại sau';
    if (action.payload.response && action.payload.response?.errors?.length) {
      message = action.payload.response?.errors[0].message;
    }
    NotificationError('Cảnh báo', message);
  }
}

export function* checkUpdateSuccessAsync() {
  while (true) {
    const action: ResponseGenerator = yield take((action: any) => /.+_UPDATED_SUCCESS/.test(action.type));
    NotificationSuccess('Thông báo', action.payload.message || 'Cập nhật thành công');
  }
}
