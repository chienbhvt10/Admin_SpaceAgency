import { CommonPath } from 'commons/base-routes';
import { NotificationSuccess } from 'commons/components/Notification';
import { clientError } from 'helpers/error';
import { getNavigate } from 'helpers/history';
import { put, take } from 'redux-saga/effects';
import { actionLoadingError } from './actions';
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
    clientError(action.payload.response.errors[0].code);
    yield put(actionLoadingError());
  }
}

export function* checkUpdateSuccessAsync() {
  while (true) {
    const action: ResponseGenerator = yield take((action: any) => /.+_UPDATED_SUCCESS/.test(action.type));
    NotificationSuccess('Thông báo', action.payload.message || 'Cập nhật thành công');
  }
}
