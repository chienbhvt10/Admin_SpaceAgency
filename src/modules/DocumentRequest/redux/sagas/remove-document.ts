import { NotificationSuccess } from 'commons/components/Notification';
import { RemoveDocumentRequest } from 'graphql/generated/graphql';
import * as apis from 'modules/DocumentRequest/services/apis';
import { put, select } from 'redux-saga/effects';
import { actionLoadingSuccess } from 'redux/actions';
import { RootState } from 'redux/reducers';
import { RemoveDocumentAction } from '../action-types';
import { actionDocuments } from '../actions';
import { actionRemoveDocumentError, actionRemoveDocumentSuccess } from '../actions/remove-document';
export function* removeDocumentAsync(action: RemoveDocumentAction) {
  try {
    const data: RemoveDocumentRequest = yield apis.removeDocumentRequest(action.payload);
    const { pagination } = yield select((state: RootState) => state.requests.requestsState);
    yield put(actionDocuments({ pagination }));
    yield put(actionRemoveDocumentSuccess(data.removeDocumentRequest));
    NotificationSuccess('Thông báo!', 'Delete appointment success');
    yield put(actionLoadingSuccess());
  } catch (err: any) {
    yield put(actionRemoveDocumentError(err));
  }
}
