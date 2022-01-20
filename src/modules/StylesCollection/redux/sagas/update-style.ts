import * as apis from 'modules/StylesCollection/services/apis';
import { NotificationError, NotificationSuccess } from 'commons/components/Notification';
import { UpdateStyle } from 'graphql/generated/graphql';
import { getNavigate } from 'helpers/history';
import { put } from 'redux-saga/effects';
import { actionLoadingSuccess } from 'redux/actions';
import { UpdateStyleAction } from '../action-types';
import { updateStyleError, updateStyleSuccess } from '../actions';
import { CommonPath } from 'commons/base-routes';

export function* updateStyleAsync(action: UpdateStyleAction) {
  try {
    const data: UpdateStyle = yield apis.updateStyleApi(action.payload);
    yield put(updateStyleSuccess(data.updateStyle));
    getNavigate(CommonPath.STYLES_COLLECTION);
    NotificationSuccess('Thông báo!', 'Update style success!');
    yield put(actionLoadingSuccess());
  } catch (err: any) {
    yield put(updateStyleError(err));
  }
}
