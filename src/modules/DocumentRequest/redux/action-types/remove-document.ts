import { AppError } from 'commons/type';
import {
  IAppointmentRequest,
  IDocumentRequest,
  IRequest,
  RemoveDocumentRequestVariables,
} from 'graphql/generated/graphql';
export const REMOVE_DOCUMENT = 'REMOVE_DOCUMENT';
export const REMOVE_DOCUMENT_SUCCESS = 'REMOVE_DOCUMENT_SUCCESS';
export const REMOVE_DOCUMENT_ERROR = 'REMOVE_DOCUMENT_ERROR';

export interface RemoveDocumentState {
  loading: boolean;
  dataRemoveDocument?: IDocumentRequest;
}

export interface RemoveDocumentAction {
  type: typeof REMOVE_DOCUMENT;
  payload: RemoveDocumentRequestVariables;
}

export interface RemoveDocumentActionSuccess {
  type: typeof REMOVE_DOCUMENT_SUCCESS;
  payload: IDocumentRequest;
}

export interface RemoveDocumentActionError {
  type: typeof REMOVE_DOCUMENT_ERROR;
  payload: AppError;
}
export type RemoveDocumentActionTypes = RemoveDocumentAction | RemoveDocumentActionSuccess | RemoveDocumentActionError;
