import authSaga from 'modules/Auth/redux/sagas';
import { all } from 'redux-saga/effects';
import * as commonSaga from './common-saga';
import themeSaga from 'modules/ThemesCollection/redux/sagas';
import userSaga from 'modules/UserManagement/redux/sagas';

export default function* rootSaga() {
  yield all([authSaga(), themeSaga(), userSaga(), commonSaga.checkErrorAsync()]);
}
