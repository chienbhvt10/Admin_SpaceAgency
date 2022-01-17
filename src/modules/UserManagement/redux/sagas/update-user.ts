import { UpdateUser } from 'graphql/generated/graphql';
import { getNavigate } from 'helpers/history';
import { loginError } from 'modules/Auth/redux/actions';
import * as apis from 'modules/UserManagement/services/apis';
import { put } from 'redux-saga/effects';
import { actionLoadingSuccess } from 'redux/actions';
import { UpdateUserAction } from '../action-types';
import { actionUpdateUserSuccess } from '../actions';
import { CommonPath } from 'commons/base-routes';
import { NotificationSuccess } from 'commons/components/Notification';
export function* updateUserAsync(action: UpdateUserAction) {
  try {
    const data: UpdateUser = yield apis.updateUser(action.payload);
    yield put(actionUpdateUserSuccess(data.updateUser));
    getNavigate(CommonPath.USERS_MANAGEMENT);
    NotificationSuccess('Thông báo!', 'Update User Success.');
    yield put(actionLoadingSuccess());
  } catch (err: any) {
    yield put(loginError(err));
  }
}
