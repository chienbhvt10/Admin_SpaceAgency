import { GetListThemes } from 'graphql/generated/graphql';
import { loginError } from 'modules/Auth/redux/actions';
import * as apis from 'modules/ThemesCollection/services/apis';
import { put } from 'redux-saga/effects';
import { actionLoadingSuccess } from 'redux/actions';
import { ThemesAction } from '../action-types/themes';
import { actionThemesSuccess } from '../actions';
export function* getThemesAsync(action: ThemesAction) {
  try {
    const data: GetListThemes = yield apis.getThemes(action.payload);
    yield put(
      actionThemesSuccess({
        dataThemes: data.themes,
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
