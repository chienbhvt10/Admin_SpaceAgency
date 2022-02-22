import {
  RemoveAppointmentActionTypes,
  RemoveAppointmentState,
  REMOVE_APPOINTMENT,
  REMOVE_APPOINTMENT_ERROR,
  REMOVE_APPOINTMENT_SUCCESS,
} from '../action-types';

const initialState: RemoveAppointmentState = {
  loading: false,
  dataRemoveAppointment: undefined,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: RemoveAppointmentActionTypes): RemoveAppointmentState => {
  switch (action.type) {
    case REMOVE_APPOINTMENT:
      return {
        ...state,
        loading: true,
      };

    case REMOVE_APPOINTMENT_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case REMOVE_APPOINTMENT_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
