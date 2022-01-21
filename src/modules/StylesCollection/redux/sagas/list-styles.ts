import { GetListStyles } from 'graphql/generated/graphql';
import { loginError } from 'modules/Auth/redux/actions';
import * as apis from 'modules/StylesCollection/services/apis';
import { put } from 'redux-saga/effects';
import { actionLoadingSuccess } from 'redux/actions';
import { StylesAction } from '../action-types';
import { actionStylesSuccess } from '../actions';
export function* getStylesAsync(action: StylesAction) {
  try {
    const data: GetListStyles = yield apis.getListStyle(action.payload);
    yield put(
      actionStylesSuccess({
        dataStyles: data.styles,
        pagination: {
          ...action.payload.pagination,
        },
        where: {
          ...action.payload.where,
        },
      }),
    );
    yield put(actionLoadingSuccess());
  } catch (err: any) {
    yield put(loginError(err));
  }
}
