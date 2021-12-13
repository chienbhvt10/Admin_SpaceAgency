import authSaga from 'modules/Auth/redux/sagas';
import userSagas from 'modules/User/redux/sagas';
import { all } from 'redux-saga/effects';
import * as commonSaga from './common-saga';

export default function* rootSaga() {
  yield all([authSaga(), userSagas(), commonSaga.checkErrorAsync()]);
}
