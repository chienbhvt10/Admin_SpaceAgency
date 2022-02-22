import { all, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../action-types';
import { getListAppointmentsAsync } from './list-appointments';
import { removeAppointmentAsync } from './remove-appointment';
export default function* root() {
  yield all([takeLatest(actionTypes.LIST_APPOINTMENT, getListAppointmentsAsync)]);
  yield all([takeLatest(actionTypes.REMOVE_APPOINTMENT, removeAppointmentAsync)]);
}
