import { NotificationSuccess } from 'commons/components/Notification';
import { RemoveAppointmentRequest } from 'graphql/generated/graphql';
import * as apis from 'modules/AppointmentRequest/services/apis';
import { put, select } from 'redux-saga/effects';
import { actionLoadingSuccess } from 'redux/actions';
import { RootState } from 'redux/reducers';
import { RemoveAppointmentAction } from '../action-types';
import { actionAppointments } from '../actions';
import { actionRemoveAppointmentError, actionRemoveAppointmentSuccess } from '../actions/remove-appointment';
export function* removeAppointmentAsync(action: RemoveAppointmentAction) {
  try {
    const data: RemoveAppointmentRequest = yield apis.removeAppointmentRequest(action.payload);
    const { pagination } = yield select((state: RootState) => state.requests.requestsState);
    yield put(actionAppointments({ pagination }));
    yield put(actionRemoveAppointmentSuccess(data.removeAppointmentRequest));
    NotificationSuccess('Thông báo!', 'Delete appointment success');
    yield put(actionLoadingSuccess());
  } catch (err: any) {
    yield put(actionRemoveAppointmentError(err));
  }
}
