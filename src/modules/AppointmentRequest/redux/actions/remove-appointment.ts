import { AppError } from 'commons/type';
import { IAppointmentRequest, RemoveAppointmentRequestVariables } from 'graphql/generated/graphql';
import {
  RemoveAppointmentActionTypes,
  REMOVE_APPOINTMENT,
  REMOVE_APPOINTMENT_ERROR,
  REMOVE_APPOINTMENT_SUCCESS,
} from '../action-types';

export const actionRemoveAppointment = (payload: RemoveAppointmentRequestVariables): RemoveAppointmentActionTypes => ({
  type: REMOVE_APPOINTMENT,
  payload,
});

export const actionRemoveAppointmentError = (payload: AppError): RemoveAppointmentActionTypes => ({
  type: REMOVE_APPOINTMENT_ERROR,
  payload,
});

export const actionRemoveAppointmentSuccess = (payload: IAppointmentRequest): RemoveAppointmentActionTypes => ({
  type: REMOVE_APPOINTMENT_SUCCESS,
  payload,
});
