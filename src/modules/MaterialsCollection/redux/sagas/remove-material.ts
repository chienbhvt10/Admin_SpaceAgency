import { NotificationSuccess } from 'commons/components/Notification';
import { RemoveMaterial } from 'graphql/generated/graphql';
import { loginError } from 'modules/Auth/redux/actions';
import * as apis from 'modules/MaterialsCollection/services/apis';
import { put, select } from 'redux-saga/effects';
import { actionLoadingSuccess } from 'redux/actions';
import { RootState } from 'redux/reducers';
import { RemoveMaterialAction } from '../action-types';
import { actionMaterials, actionRemoveMaterialSuccess } from '../actions';
export function* removeMaterialAsync(action: RemoveMaterialAction) {
  try {
    const data: RemoveMaterial = yield apis.removeMaterial(action.payload);
    const { pagination } = yield select((state: RootState) => state.materials.materialsState);
    yield put(actionRemoveMaterialSuccess(data.removeMaterial));
    yield put(actionMaterials({ pagination }));
    NotificationSuccess('Thông báo!', 'Delete user success');
    yield put(actionLoadingSuccess());
  } catch (err: any) {
    yield put(loginError(err));
  }
}
