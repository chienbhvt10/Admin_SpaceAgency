// import { NotificationError, NotificationSuccess } from 'commons/components/Notification';
import { take } from 'redux-saga/effects';

// eslint-disable-next-line require-yield
export function* checkErrorAsync() {
  while (true) {
    yield take((action: any) => /.+_ERROR/.test(action.type));
    alert('Có lỗi xảy ra vui lòng thử lại sau');
  }
}

// eslint-disable-next-line require-yield
export function* checkUpdateSuccessAsync() {
  while (true) {
    yield take((action: any) => /.+_UPDATED_SUCCESS/.test(action.type));
    alert('Cập nhật thành công');
  }
}
