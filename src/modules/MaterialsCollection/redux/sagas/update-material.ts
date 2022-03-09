import { CommonPath } from 'commons/base-routes';
import { NotificationSuccess } from 'commons/components/Notification';
import { UpdateMaterial } from 'graphql/generated/graphql';
import { getNavigate } from 'helpers/history';
import * as apis from 'modules/MaterialsCollection/services/apis';
import { put } from 'redux-saga/effects';
import { actionLoadingSuccess } from 'redux/actions';
import { UpdateMaterialAction } from '../action-types';
import { actionUpdateMaterialError, actionUpdateMaterialSuccess } from '../actions';
export function* updateMaterialAsync(action: UpdateMaterialAction) {
  try {
    const data: UpdateMaterial = yield apis.updateMaterials(action.payload);
    yield put(actionUpdateMaterialSuccess(data.updateMaterial));
    getNavigate(CommonPath.MATERIAL_COLLECTION);
    NotificationSuccess('通知!', 'カスタマイズ更新に成功しました。');
    yield put(actionLoadingSuccess());
  } catch (err: any) {
    yield put(actionUpdateMaterialError(err));
  }
}
