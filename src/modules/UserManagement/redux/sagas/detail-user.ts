import { GetUser } from 'graphql/generated/graphql';
import { loginError } from 'modules/Auth/redux/actions';
import * as apis from 'modules/UserManagement/services/apis';
import { put } from 'redux-saga/effects';
import { actionLoadingSuccess } from 'redux/actions';
import { RemoveUserAction } from '../action-types/remove-user';
import { actionDetailUserSuccess } from '../actions';
export function* detailUserAsync(action: RemoveUserAction) {
  try {
    const data: GetUser = yield apis.getUser(action.payload);
    yield put(actionDetailUserSuccess(data.user));
    yield put(actionLoadingSuccess());
  } catch (err: any) {
    yield put(loginError(err));
  }
}
