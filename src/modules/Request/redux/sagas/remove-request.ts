import { NotificationSuccess } from 'commons/components/Notification';
import { RemoveRequest } from 'graphql/generated/graphql';
import * as apis from 'modules/Request/services/apis';
import { put, select } from 'redux-saga/effects';
import { actionLoadingSuccess } from 'redux/actions';
import { RootState } from 'redux/reducers';
import { RemoveRequestAction } from '../action-types';
import { actionRequests } from '../actions';
import { actionRemoveRequestError, actionRemoveRequestSuccess } from '../actions/remove-request';
export function* removeRequestAsync(action: RemoveRequestAction) {
  try {
    const data: RemoveRequest = yield apis.removeRequest(action.payload);
    const { pagination } = yield select((state: RootState) => state.requests.requestsState);
    yield put(actionRequests({ pagination }));
    yield put(actionRemoveRequestSuccess(data.removeRequest));
    NotificationSuccess('通知', 'リクエスト削除に成功しました。');
    yield put(actionLoadingSuccess());
  } catch (err: any) {
    yield put(actionRemoveRequestError(err));
  }
}
