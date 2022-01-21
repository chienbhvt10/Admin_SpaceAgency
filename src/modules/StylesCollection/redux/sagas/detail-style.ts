import { GetStyle } from 'graphql/generated/graphql';
import { loginError } from 'modules/Auth/redux/actions';
import * as apis from 'modules/StylesCollection/services/apis';
import { put } from 'redux-saga/effects';
import { actionLoadingSuccess } from 'redux/actions';
import { DetailStyleAction } from '../action-types';
import { actionDetailStyleSuccess } from '../actions';
export function* detailStyleAsync(action: DetailStyleAction) {
  try {
    const data: GetStyle = yield apis.getStyleDetail(action.payload);
    yield put(actionDetailStyleSuccess(data.style));
    yield put(actionLoadingSuccess());
  } catch (err: any) {
    yield put(loginError(err));
  }
}
