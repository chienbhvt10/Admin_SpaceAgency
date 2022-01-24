import { NotificationSuccess } from 'commons/components/Notification';
import { RemoveUser } from 'graphql/generated/graphql';
import { loginError } from 'modules/Auth/redux/actions';
import * as apis from 'modules/UserManagement/services/apis';
import { put, select } from 'redux-saga/effects';
import { actionLoadingSuccess } from 'redux/actions';
import { RootState } from 'redux/reducers';
import { RemoveUserAction } from '../action-types/remove-user';
import { actionUsers } from '../actions';
import { actionRemoveUserError, actionRemoveUserSuccess } from '../actions/remove-user';
export function* removeUserAsync(action: RemoveUserAction) {
  try {
    const data: RemoveUser = yield apis.removeUser(action.payload);
    const { pagination } = yield select((state: RootState) => state.users.usersState);
    yield put(actionUsers({ pagination }));
    yield put(actionRemoveUserSuccess(data.removeUser));
    NotificationSuccess('Thông báo!', 'Delete user success');
    yield put(actionLoadingSuccess());
  } catch (err: any) {
    yield put(actionRemoveUserError(err));
  }
}
