import { AppError } from 'commons/type';
import { IAppointmentRequest, IRequest, RemoveAppointmentRequestVariables } from 'graphql/generated/graphql';
export const REMOVE_APPOINTMENT = 'REMOVE_APPOINTMENT';
export const REMOVE_APPOINTMENT_SUCCESS = 'REMOVE_APPOINTMENT_SUCCESS';
export const REMOVE_APPOINTMENT_ERROR = 'REMOVE_APPOINTMENT_ERROR';

export interface RemoveAppointmentState {
  loading: boolean;
  dataRemoveAppointment?: IRequest;
}

export interface RemoveAppointmentAction {
  type: typeof REMOVE_APPOINTMENT;
  payload: RemoveAppointmentRequestVariables;
}

export interface RemoveAppointmentActionSuccess {
  type: typeof REMOVE_APPOINTMENT_SUCCESS;
  payload: IAppointmentRequest;
}

export interface RemoveAppointmentActionError {
  type: typeof REMOVE_APPOINTMENT_ERROR;
  payload: AppError;
}
export type RemoveAppointmentActionTypes =
  | RemoveAppointmentAction
  | RemoveAppointmentActionSuccess
  | RemoveAppointmentActionError;
