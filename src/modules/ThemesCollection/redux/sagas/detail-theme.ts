import { GetDetailTheme } from 'graphql/generated/graphql';
import * as apis from 'modules/ThemesCollection/services/apis';
import { put } from 'redux-saga/effects';
import { actionLoadingSuccess } from 'redux/actions';
import { DetailThemeAction } from '../action-types/';
import { actionDetailThemeError, actionDetailThemeSuccess } from '../actions/detail-theme';
export function* detailThemeAsync(action: DetailThemeAction) {
  try {
    const data: GetDetailTheme = yield apis.getDetailTheme(action.payload);
    yield put(actionDetailThemeSuccess(data.theme));
    yield put(actionLoadingSuccess());
  } catch (err: any) {
    yield put(actionDetailThemeError(err));
  }
}
