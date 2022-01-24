import { GetStyle } from 'graphql/generated/graphql';
import * as apis from 'modules/StylesCollection/services/apis';
import { put } from 'redux-saga/effects';
import { actionLoadingSuccess } from 'redux/actions';
import { DetailStyleAction } from '../action-types';
import { actionDetailStyleError, actionDetailStyleSuccess } from '../actions';
export function* detailStyleAsync(action: DetailStyleAction) {
  try {
    const data: GetStyle = yield apis.getStyleDetail(action.payload);
    yield put(actionDetailStyleSuccess(data.style));
    yield put(actionLoadingSuccess());
  } catch (err: any) {
    yield put(actionDetailStyleError(err));
  }
}
