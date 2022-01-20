import { GetListMaterials, GetListUsers } from 'graphql/generated/graphql';
import { MaterialsAction } from '../action-types';
import * as apis from 'modules/MaterialsCollection/services/apis';
import { actionMaterialsSuccess } from '../actions';
import { put } from 'redux-saga/effects';
import { actionLoadingSuccess } from 'redux/actions';
import { loginError } from 'modules/Auth/redux/actions';
export function* getListMaterialsAsync(action: MaterialsAction) {
  try {
    const data: GetListMaterials = yield apis.getListMaterials(action.payload);
    yield put(
      actionMaterialsSuccess({
        dataMaterials: data.materials,
        pagination: {
          skip: action.payload.pagination?.skip,
          limit: action.payload.pagination?.limit,
        },
        where: {
          filter: action.payload.where?.filter,
          sort: action.payload.where?.sort,
        },
      }),
    );
    yield put(actionLoadingSuccess());
  } catch (err: any) {
    yield put(loginError(err));
  }
}
