import { CommonPath } from 'commons/base-routes';
import { NotificationSuccess } from 'commons/components/Notification';
import { UpdateStyle } from 'graphql/generated/graphql';
import { getNavigate } from 'helpers/history';
import * as apis from 'modules/StylesCollection/services/apis';
import { put } from 'redux-saga/effects';
import { actionLoadingSuccess } from 'redux/actions';
import { UpdateStyleAction } from '../action-types';
import { actionUpdateStyleError, actionUpdateStyleSuccess } from '../actions';
export function* updateStyleAsync(action: UpdateStyleAction) {
  try {
    const data: UpdateStyle = yield apis.updateStyle(action.payload);
    yield put(actionUpdateStyleSuccess(data.updateStyle));
    getNavigate(CommonPath.STYLES_COLLECTION);
    NotificationSuccess('Thông báo!', 'Update Style Success.');
    yield put(actionLoadingSuccess());
  } catch (err: any) {
    yield put(actionUpdateStyleError(err));
  }
}