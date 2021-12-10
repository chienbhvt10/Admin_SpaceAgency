import authSaga from 'modules/Auth/redux/sagas';
import { all, take } from 'redux-saga/effects';
import { APP_STARTED } from './action-types';
import * as commonSaga from './common-saga';

export default function* rootSaga() {
  yield take(APP_STARTED);
  yield all([authSaga(), commonSaga.checkErrorAsync()]);
}
