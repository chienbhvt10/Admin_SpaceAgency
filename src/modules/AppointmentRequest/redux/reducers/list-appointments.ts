import { TypePagination } from 'commons/type';
import {
  LIST_APPOINTMENT,
  LIST_APPOINTMENT_ERROR,
  LIST_APPOINTMENT_SUCCESS,
  AppointmentsActionTypes,
  AppointmentsState,
} from '../action-types';

const initialState: AppointmentsState = {
  loading: false,
  pagination: {
    skip: TypePagination.DEFAULT_SKIP,
    limit: TypePagination.DEFAULT_LIMIT,
  },
  where: {
    filter: [],
    sort: [],
  },
  dataAppointments: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: AppointmentsActionTypes): AppointmentsState => {
  switch (action.type) {
    case LIST_APPOINTMENT:
      return {
        ...state,
        loading: true,
      };

    case LIST_APPOINTMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        pagination: {
          skip: action.payload.pagination?.skip,
          limit: action.payload.pagination?.limit,
        },
        where: action.payload.where,
        total: action.payload.total,
        dataAppointments: action.payload.dataAppointments,
      };
    case LIST_APPOINTMENT_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
