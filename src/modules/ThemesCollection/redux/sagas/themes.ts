import { Themes } from 'graphql/generated/graphql';
import { ThemesAction } from '../action-types/themes';
import * as apis from 'modules/ThemesCollection/services/apis';
import { themesSuccess } from '../actions';
import { put } from 'redux-saga/effects';
import { actionLoadingSuccess } from 'redux/actions';
import { loginError } from 'modules/Auth/redux/actions';
export function* getThemesAsync(action: ThemesAction) {
  try {
    const data: Themes = yield apis.getThemes(action.payload);
    yield put(themesSuccess(data));
    yield put(actionLoadingSuccess());
  } catch (err: any) {
    yield put(loginError(err));
  }
}
