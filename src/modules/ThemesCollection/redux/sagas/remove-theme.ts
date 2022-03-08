import { NotificationSuccess } from 'commons/components/Notification';
import { RemoveTheme } from 'graphql/generated/graphql';
import * as apis from 'modules/ThemesCollection/services/apis';
import { put, select } from 'redux-saga/effects';
import { actionLoadingSuccess } from 'redux/actions';
import { RootState } from 'redux/reducers';
import { RemoveThemeAction } from '../action-types';
import { actionRemoveThemeError, actionRemoveThemeSuccess, actionThemes } from '../actions';
export function* removeThemeAsync(action: RemoveThemeAction) {
  try {
    const data: RemoveTheme = yield apis.removeTheme(action.payload);
    const { pagination } = yield select((state: RootState) => state.users.usersState);
    yield put(actionThemes({ pagination }));
    yield put(actionRemoveThemeSuccess(data));
    NotificationSuccess('通知!', 'タイプの削除に成功しました。');
    yield put(actionLoadingSuccess());
  } catch (err: any) {
    yield put(actionRemoveThemeError(err));
  }
}
