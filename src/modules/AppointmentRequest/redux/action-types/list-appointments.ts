import { AppError } from 'commons/type';
import {
  GetListAppointmentsVariables,
  IAppointmentRequest,
  PaginationInput,
  WhereInput,
} from 'graphql/generated/graphql';
export const LIST_APPOINTMENT = 'LIST_APPOINTMENT';
export const LIST_APPOINTMENT_SUCCESS = 'LIST_APPOINTMENT_SUCCESS';
export const LIST_APPOINTMENT_ERROR = 'LIST_APPOINTMENT_ERROR';

export interface AppointmentsData {
  dataAppointments: IAppointmentRequest[];
  pagination?: PaginationInput;
  total?: number;
  where?: WhereInput;
}
export interface AppointmentsState {
  loading: boolean;
  pagination: PaginationInput;
  where?: WhereInput;
  total?: number;
  dataAppointments: IAppointmentRequest[];
}

export interface AppointmentsAction {
  type: typeof LIST_APPOINTMENT;
  payload: GetListAppointmentsVariables;
}

export interface AppointmentsActionSuccess {
  type: typeof LIST_APPOINTMENT_SUCCESS;
  payload: AppointmentsData;
}

export interface AppointmentsActionError {
  type: typeof LIST_APPOINTMENT_ERROR;
  payload: AppError;
}
export type AppointmentsActionTypes = AppointmentsAction | AppointmentsActionSuccess | AppointmentsActionError;
