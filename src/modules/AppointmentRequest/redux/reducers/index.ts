import { RemoveAppointmentRequest } from 'graphql/generated/graphql';
import { combineReducers } from 'redux';
import { AppointmentsState, RemoveAppointmentState } from '../action-types';
import appointments from './list-appointments';
import removeAppointment from './remove-appointment';

export interface AppointmentsModuleState {
  appointmentsState: AppointmentsState;
  removeAppointmentState: RemoveAppointmentState;
}

export default combineReducers<AppointmentsModuleState>({
  appointmentsState: appointments,
  removeAppointmentState: removeAppointment,
});
