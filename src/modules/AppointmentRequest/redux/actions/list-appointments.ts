import { AppError } from 'commons/type';
import { GetListAppointmentsVariables } from 'graphql/generated/graphql';
import {
  LIST_APPOINTMENT,
  LIST_APPOINTMENT_ERROR,
  LIST_APPOINTMENT_SUCCESS,
  AppointmentsActionTypes,
  AppointmentsData,
} from '../action-types';

export const actionAppointments = (payload: GetListAppointmentsVariables): AppointmentsActionTypes => ({
  type: LIST_APPOINTMENT,
  payload,
});

export const actionAppointmentsError = (payload: AppError): AppointmentsActionTypes => ({
  type: LIST_APPOINTMENT_ERROR,
  payload,
});

export const actionAppointmentsSuccess = (payload: AppointmentsData): AppointmentsActionTypes => ({
  type: LIST_APPOINTMENT_SUCCESS,
  payload,
});
