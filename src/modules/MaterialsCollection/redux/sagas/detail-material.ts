import { GetDetailMaterial, GetUser } from 'graphql/generated/graphql';
import { loginError } from 'modules/Auth/redux/actions';
import * as apis from 'modules/MaterialsCollection/services/apis';
import { put } from 'redux-saga/effects';
import { actionLoadingSuccess } from 'redux/actions';
import { DetailMaterialAction } from '../action-types';
import { actionRemoveMaterialSuccess } from '../actions';
export function* detailMaterialAsync(action: DetailMaterialAction) {
  try {
    const data: GetDetailMaterial = yield apis.getMaterialsDetail(action.payload);
    yield put(actionRemoveMaterialSuccess(data.material));
    yield put(actionLoadingSuccess());
  } catch (err: any) {
    yield put(loginError(err));
  }
}
