import { CommonPath } from 'commons/base-routes';
import { NotificationSuccess } from 'commons/components/Notification';
import { UpdateRequestStatus } from 'graphql/generated/graphql';
import { getNavigate } from 'helpers/history';
import * as apis from 'modules/Request/services/apis';
import { put } from 'redux-saga/effects';
import { actionLoadingSuccess } from 'redux/actions';
import { UpdateRequestStatusAction } from '../action-types';
import { actionUpdateRequestStatusError, actionUpdateRequestStatusSuccess } from '../actions';
export function* updateRequestStatusAsync(action: UpdateRequestStatusAction) {
  try {
    const data: UpdateRequestStatus = yield apis.updateRequestStatus({
      id: action.payload.id,
      status: action.payload.status,
    });
    yield put(actionUpdateRequestStatusSuccess(data.updateRequestStatus));
    getNavigate(CommonPath.CONTACT_REQUEST);
    NotificationSuccess('通知', 'リクエストステータス更新に成功しました。');
    yield put(actionLoadingSuccess());
  } catch (err: any) {
    yield put(actionUpdateRequestStatusError(err));
  }
}
