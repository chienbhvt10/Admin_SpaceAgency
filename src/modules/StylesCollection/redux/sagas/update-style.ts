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
    const data: UpdateStyle = yield apis.updateStyle({
      updateStyleInput: {
        ...action.payload.updateStyleInput,
      },
    });
    yield put(actionUpdateStyleSuccess(data.updateStyle));
    getNavigate(CommonPath.STYLES_COLLECTION);
    NotificationSuccess('通知!', 'デザイン更新に成功しました。');
    yield put(actionLoadingSuccess());
  } catch (err: any) {
    yield put(actionUpdateStyleError(err));
  }
}
