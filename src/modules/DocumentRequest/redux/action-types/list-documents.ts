import { AppError } from 'commons/type';
import {
  GetListDocumentsVariables,
  IAppointmentRequest,
  IDocumentRequest,
  PaginationInput,
  WhereInput,
} from 'graphql/generated/graphql';
export const LIST_DOCUMENT = 'LIST_DOCUMENT';
export const LIST_DOCUMENT_SUCCESS = 'LIST_DOCUMENT_SUCCESS';
export const LIST_DOCUMENT_ERROR = 'LIST_DOCUMENT_ERROR';

export interface DocumentsData {
  dataDocuments: IDocumentRequest[];
  pagination?: PaginationInput;
  total?: number;
  where?: WhereInput;
}
export interface DocumentsState {
  loading: boolean;
  pagination: PaginationInput;
  where?: WhereInput;
  total?: number;
  dataDocuments: IDocumentRequest[];
}

export interface DocumentsAction {
  type: typeof LIST_DOCUMENT;
  payload: GetListDocumentsVariables;
}

export interface DocumentsActionSuccess {
  type: typeof LIST_DOCUMENT_SUCCESS;
  payload: DocumentsData;
}

export interface DocumentsActionError {
  type: typeof LIST_DOCUMENT_ERROR;
  payload: AppError;
}
export type DocumentsActionTypes = DocumentsAction | DocumentsActionSuccess | DocumentsActionError;
