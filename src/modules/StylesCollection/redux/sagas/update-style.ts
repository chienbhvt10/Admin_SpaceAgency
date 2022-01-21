import { UpdateStyle, UpdateUser } from 'graphql/generated/graphql';
import { getNavigate } from 'helpers/history';
import { loginError } from 'modules/Auth/redux/actions';
import * as apis from 'modules/StylesCollection/services/apis';
import { put } from 'redux-saga/effects';
import { actionLoadingSuccess } from 'redux/actions';
import { UpdateStyleAction } from '../action-types';
import { actionUpdateStyleSuccess } from '../actions';
import { CommonPath } from 'commons/base-routes';
import { NotificationSuccess } from 'commons/components/Notification';
export function* updateStyleAsync(action: UpdateStyleAction) {
  try {
    const data: UpdateStyle = yield apis.updateStyle(action.payload);
    yield put(actionUpdateStyleSuccess(data.updateStyle));
    getNavigate(CommonPath.STYLES_COLLECTION);
    NotificationSuccess('Thông báo!', 'Update Style Success.');
    yield put(actionLoadingSuccess());
  } catch (err: any) {
    yield put(loginError(err));
  }
}
