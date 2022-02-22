import { combineReducers } from 'redux';
import { DocumentsState, RemoveDocumentState } from '../action-types';
import documents from './list-documents';
import removeDocument from './remove-document';

export interface DocumentsModuleState {
  documentsState: DocumentsState;
  removeDocument: RemoveDocumentState;
}

export default combineReducers<DocumentsModuleState>({
  documentsState: documents,
  removeDocument: removeDocument,
});
