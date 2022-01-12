import { GetListThemes } from 'graphql/generated/graphql';
import { ThemesAction } from '../action-types/themes';
import * as apis from 'modules/ThemesCollection/services/apis';
import { actionThemesSuccess } from '../actions';
import { put } from 'redux-saga/effects';
import { actionLoadingSuccess } from 'redux/actions';
import { loginError } from 'modules/Auth/redux/actions';
export function* getThemesAsync(action: ThemesAction) {
  try {
    const data: GetListThemes = yield apis.getThemes(action.payload);
    yield put(actionThemesSuccess(data.themes));
    yield put(actionLoadingSuccess());
  } catch (err: any) {
    yield put(loginError(err));
  }
}
