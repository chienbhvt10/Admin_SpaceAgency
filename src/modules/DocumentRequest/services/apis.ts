import {
  GetListDocumentsVariables,
  GetTotalCountVariables,
  RemoveDocumentRequestVariables,
} from 'graphql/generated/graphql';
import { getSDK } from 'services/graphql-caller';

export const getListDocuments = async (variables?: GetListDocumentsVariables) => {
  const sdk = getSDK(true);
  return sdk.getListDocuments(variables);
};

export const getTotalAppointments = async (variables: GetTotalCountVariables) => {
  const sdk = getSDK(true);
  return sdk.getTotalCount(variables);
};
export const removeDocumentRequest = async (variables: RemoveDocumentRequestVariables) => {
  const sdk = getSDK(true);
  return sdk.removeDocumentRequest(variables);
};
