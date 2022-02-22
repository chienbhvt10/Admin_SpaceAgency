import { all, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../action-types';
import { getListDocumentsAsync } from './list-documents';
import { removeDocumentAsync } from './remove-document';
export default function* root() {
  yield all([takeLatest(actionTypes.LIST_DOCUMENT, getListDocumentsAsync)]);
  yield all([takeLatest(actionTypes.REMOVE_DOCUMENT, removeDocumentAsync)]);
}
