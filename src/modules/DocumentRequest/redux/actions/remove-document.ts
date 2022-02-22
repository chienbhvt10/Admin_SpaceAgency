import { AppError } from 'commons/type';
import { IDocumentRequest, RemoveDocumentRequestVariables } from 'graphql/generated/graphql';
import {
  RemoveDocumentActionTypes,
  REMOVE_DOCUMENT,
  REMOVE_DOCUMENT_ERROR,
  REMOVE_DOCUMENT_SUCCESS,
} from '../action-types';

export const actionRemoveDocument = (payload: RemoveDocumentRequestVariables): RemoveDocumentActionTypes => ({
  type: REMOVE_DOCUMENT,
  payload,
});

export const actionRemoveDocumentError = (payload: AppError): RemoveDocumentActionTypes => ({
  type: REMOVE_DOCUMENT_ERROR,
  payload,
});

export const actionRemoveDocumentSuccess = (payload: IDocumentRequest): RemoveDocumentActionTypes => ({
  type: REMOVE_DOCUMENT_SUCCESS,
  payload,
});
