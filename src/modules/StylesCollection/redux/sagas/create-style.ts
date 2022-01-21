import { CommonPath } from 'commons/base-routes';
import { NotificationSuccess } from 'commons/components/Notification';
import { TypePagination } from 'commons/type';
import { CreateCustomer, CreateStyle } from 'graphql/generated/graphql';
import { getNavigate } from 'helpers/history';
import { loginError } from 'modules/Auth/redux/actions';
import * as apis from 'modules/StylesCollection/services/apis';
import { put } from 'redux-saga/effects';
import { actionLoadingSuccess } from 'redux/actions';
import { CreateStyleAction } from '../action-types';
import { actionCreateStyleSuccess } from '../actions';
import { actionStyles } from '../actions/list-styles';
export function* createStyleAsync(action: CreateStyleAction) {
  try {
    const data: CreateStyle = yield apis.createStyle(action.payload);
    yield put(
      actionStyles({
        pagination: {
          skip: TypePagination.DEFAULT_SKIP,
          limit: TypePagination.DEFAULT_LIMIT,
        },
      }),
    );
    getNavigate(CommonPath.STYLES_COLLECTION);
    yield put(actionCreateStyleSuccess(data.createStyle));
    NotificationSuccess('Thông báo!', 'Create style success.');
    yield put(actionLoadingSuccess());
  } catch (err: any) {
    console.log('Create data error', action.payload);
    yield put(actionLoadingSuccess());
    yield put(loginError(err));
  }
}
