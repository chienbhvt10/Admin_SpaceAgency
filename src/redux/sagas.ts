import authSaga from 'modules/Auth/redux/sagas';
import { all, take } from 'redux-saga/effects';
import { APP_STARTED } from './actions';

export default function* rootSaga() {
  yield take(APP_STARTED);
  yield all([authSaga()]);
}
