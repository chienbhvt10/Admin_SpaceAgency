import { CommonPath } from 'commons/base-routes';
import { NotificationSuccess } from 'commons/components/Notification';
import { UpdateUser } from 'graphql/generated/graphql';
import { getNavigate } from 'helpers/history';
import * as apis from 'modules/UserManagement/services/apis';
import { put } from 'redux-saga/effects';
import { actionLoadingSuccess } from 'redux/actions';
import { UpdateUserAction } from '../action-types';
import { actionUpdateUserError, actionUpdateUserSuccess } from '../actions';
export function* updateUserAsync(action: UpdateUserAction) {
  try {
    const data: UpdateUser = yield apis.updateUser(action.payload);
    yield put(actionUpdateUserSuccess(data.updateUser));
    getNavigate(CommonPath.USERS_MANAGEMENT);
    NotificationSuccess('通知', 'ユーザー設定に成功しました。');
    yield put(actionLoadingSuccess());
  } catch (err: any) {
    yield put(actionUpdateUserError(err));
  }
}
