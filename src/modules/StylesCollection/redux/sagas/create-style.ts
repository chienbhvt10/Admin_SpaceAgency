import * as apis from 'modules/StylesCollection/services/apis';
import { NotificationSuccess } from 'commons/components/Notification';
import { CreateStyle } from 'graphql/generated/graphql';
import { getNavigate } from 'helpers/history';
import { put } from 'redux-saga/effects';
import { actionLoadingSuccess } from 'redux/actions';
import { CreateStyleAction } from '../action-types';
import { createStyleError, createStyleSuccess, getListStyle } from '../actions';
import { TypePagination } from 'commons/type';
import { CommonPath } from 'commons/base-routes';

export function* createStyleAsync(action: CreateStyleAction) {
  try {
    const data: CreateStyle = yield apis.createStyleApi(action.payload);
    yield put(
      getListStyle({
        pagination: {
          skip: TypePagination.DEFAULT_SKIP,
          limit: TypePagination.DEFAULT_LIMIT,
        },
      }),
    );
    getNavigate(CommonPath.STYLES_COLLECTION);
    yield put(createStyleSuccess(data.createStyle));
    NotificationSuccess('Thông báo!', 'Create style successfully!');
    yield put(actionLoadingSuccess());
  } catch (err: any) {
    yield put(createStyleError(err));
  }
}
