import { CommonPath } from 'commons/base-routes';
import { NotificationSuccess } from 'commons/components/Notification';
import { TypePagination } from 'commons/type';
import { CreateCustomer } from 'graphql/generated/graphql';
import { getNavigate } from 'helpers/history';
import { loginError } from 'modules/Auth/redux/actions';
import * as apis from 'modules/UserManagement/services/apis';
import { put } from 'redux-saga/effects';
import { actionLoadingSuccess } from 'redux/actions';
import { CreateUserAction } from '../action-types';
import { actionCreateUserSuccess } from '../actions';
import { actionUsers } from '../actions/list-users';
export function* createUserAsync(action: CreateUserAction) {
  try {
    const data: CreateCustomer = yield apis.createUser(action.payload);
    yield put(
      actionUsers({
        pagination: {
          skip: TypePagination.DEFAULT_SKIP,
          limit: TypePagination.DEFAULT_LIMIT,
        },
      }),
    );
    getNavigate(CommonPath.USERS_MANAGEMENT);
    yield put(actionCreateUserSuccess(data.createCustomer));
    NotificationSuccess('Thông báo!', 'Create user success.');
    yield put(actionLoadingSuccess());
  } catch (err: any) {
    yield put(loginError(err));
  }
}