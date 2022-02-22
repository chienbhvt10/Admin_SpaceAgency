import {
  GetListAppointmentsVariables,
  GetTotalCountVariables,
  RemoveAppointmentRequestVariables,
} from 'graphql/generated/graphql';
import { getSDK } from 'services/graphql-caller';

export const getListAppointments = async (variables?: GetListAppointmentsVariables) => {
  const sdk = getSDK(true);
  return sdk.getListAppointments(variables);
};

export const getTotalAppointments = async (variables: GetTotalCountVariables) => {
  const sdk = getSDK(true);
  return sdk.getTotalCount(variables);
};
export const removeAppointmentRequest = async (variables: RemoveAppointmentRequestVariables) => {
  const sdk = getSDK(true);
  return sdk.removeAppointmentRequest(variables);
};
