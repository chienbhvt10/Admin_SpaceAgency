import { GetListMaterials, GetListUsers, GetTotalCount, SchemaType } from 'graphql/generated/graphql';
import { MaterialsAction } from '../action-types';
import * as apis from 'modules/MaterialsCollection/services/apis';
import { actionMaterialsError, actionMaterialsSuccess } from '../actions';
import { put } from 'redux-saga/effects';
import { actionLoadingSuccess } from 'redux/actions';
export function* getListMaterialsAsync(action: MaterialsAction) {
  try {
    const data: GetListMaterials = yield apis.getListMaterials(action.payload);
    const totalMaterial: GetTotalCount = yield apis.getTotalMaterial({
      type: SchemaType.Material,
      where: { ...action.payload.where },
    });
    yield put(
      actionMaterialsSuccess({
        dataMaterials: data.materials || [],
        pagination: {
          skip: action.payload.pagination?.skip,
          limit: action.payload.pagination?.limit,
        },
        total: totalMaterial.count,
        where: {
          filter: action.payload.where?.filter,
          sort: action.payload.where?.sort,
        },
      }),
    );
    yield put(actionLoadingSuccess());
  } catch (err: any) {
    yield put(actionMaterialsError(err));
  }
}
