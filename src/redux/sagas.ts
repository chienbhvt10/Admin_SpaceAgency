import authSaga from 'modules/Auth/redux/sagas';
import { all } from 'redux-saga/effects';
import * as commonSaga from './common-saga';
import themeSaga from 'modules/ThemesCollection/redux/sagas';
import userSaga from 'modules/UserManagement/redux/sagas';
import styleSaga from 'modules/StylesCollection/redux/sagas';
import materialsSaga from 'modules/MaterialsCollection/redux/sagas';
import requestsSaga from 'modules/ContactRequest/redux/sagas';
import simulationsSaga from 'modules/CustomerSimulation/redux/sagas';

export default function* rootSaga() {
  yield all([
    authSaga(),
    themeSaga(),
    userSaga(),
    styleSaga(),
    materialsSaga(),
    simulationsSaga(),
    requestsSaga(),
    commonSaga.checkErrorAsync(),
  ]);
}
