import { CommonPath } from 'commons/base-routes';
import { NotificationSuccess } from 'commons/components/Notification';
import { TypePagination } from 'commons/type';
import { CreateMaterial } from 'graphql/generated/graphql';
import { getNavigate } from 'helpers/history';
import { loginError } from 'modules/Auth/redux/actions';
import * as apis from 'modules/MaterialsCollection/services/apis';
import { put } from 'redux-saga/effects';
import { actionLoadingSuccess } from 'redux/actions';
import { CreateMaterialsAction } from '../action-types';
import { actionCreateMaterialsUserSuccess, actionMaterials } from '../actions';
export function* createMaterialsAsync(action: CreateMaterialsAction) {
  try {
    const data: CreateMaterial = yield apis.createMaterials(action.payload);
    yield put(
      actionMaterials({
        pagination: {
          skip: TypePagination.DEFAULT_SKIP,
          limit: TypePagination.DEFAULT_LIMIT,
        },
      }),
    );
    getNavigate(CommonPath.MATERIAL_COLLECTION);
    yield put(actionCreateMaterialsUserSuccess(data));
    NotificationSuccess('Thông báo!', 'Create materials success.');
    yield put(actionLoadingSuccess());
  } catch (err: any) {
    yield put(loginError(err));
  }
}
