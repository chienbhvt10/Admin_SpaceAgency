import * as apis from 'modules/StylesCollection/services/apis';
import { GetStyle } from 'graphql/generated/graphql';
import { put } from 'redux-saga/effects';
import { actionLoadingSuccess } from 'redux/actions';
import { GetStyleAction } from '../action-types';
import { getStyleError, getStyleSuccess } from '../actions';

export function* getStyleAsync(action: GetStyleAction) {
  try {
    const data: GetStyle = yield apis.getStyleApi(action.payload);
    yield put(getStyleSuccess(data.style));
    yield put(actionLoadingSuccess());
  } catch (err: any) {
    yield put(getStyleError(err));
  }
}
