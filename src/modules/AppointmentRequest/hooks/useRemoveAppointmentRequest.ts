import { RemoveAppointmentRequestVariables } from 'graphql/generated/graphql';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import { actionRemoveAppointment } from '../redux/actions';

export function useRemoveAppointmentRequest() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.appointments.removeAppointmentState);
  const removeAppointment = useCallback(
    (variables: RemoveAppointmentRequestVariables) => {
      dispatch(actionRemoveAppointment(variables));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );
  return {
    loading,
    removeAppointment,
  };
}
