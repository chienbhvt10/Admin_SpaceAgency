import { GetDetailMaterial } from 'graphql/generated/graphql';
import * as apis from 'modules/MaterialsCollection/services/apis';
import { put } from 'redux-saga/effects';
import { actionLoadingSuccess } from 'redux/actions';
import { DetailMaterialAction } from '../action-types';
import { actionDetailMaterialsError, actionDetailMaterialsSuccess } from '../actions';
export function* detailMaterialAsync(action: DetailMaterialAction) {
  try {
    const data: GetDetailMaterial = yield apis.getMaterialsDetail(action.payload);
    yield put(actionDetailMaterialsSuccess(data.material));
    yield put(actionLoadingSuccess());
  } catch (err: any) {
    yield put(actionDetailMaterialsError(err));
  }
}
