import { AppError } from 'commons/type';
import { GetListDocumentsVariables } from 'graphql/generated/graphql';
import {
  LIST_DOCUMENT,
  LIST_DOCUMENT_ERROR,
  LIST_DOCUMENT_SUCCESS,
  DocumentsActionTypes,
  DocumentsData,
} from '../action-types';

export const actionDocuments = (payload: GetListDocumentsVariables): DocumentsActionTypes => ({
  type: LIST_DOCUMENT,
  payload,
});

export const actionDocumentsError = (payload: AppError): DocumentsActionTypes => ({
  type: LIST_DOCUMENT_ERROR,
  payload,
});

export const actionDocumentsSuccess = (payload: DocumentsData): DocumentsActionTypes => ({
  type: LIST_DOCUMENT_SUCCESS,
  payload,
});
