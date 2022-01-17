import { CreateCustomer } from 'graphql/generated/graphql';
import { getNavigate } from 'helpers/history';
import { loginError } from 'modules/Auth/redux/actions';
import * as apis from 'modules/UserManagement/services/apis';
import { put, select } from 'redux-saga/effects';
import { actionLoadingSuccess } from 'redux/actions';
import { RootState } from 'redux/reducers';
import { CreateUserAction } from '../action-types';
import { actionCreateUserSuccess } from '../actions';
import { actionUsers } from '../actions/list-users';
import { CommonPath } from 'commons/base-routes';
export function* createUserAsync(action: CreateUserAction) {
  try {
    const data: CreateCustomer = yield apis.createUser(action.payload);
    yield put(
      actionUsers({
        pagination: {
          skip: 0,
          limit: 20,
        },
      }),
    );
    getNavigate(CommonPath.USERS_MANAGEMENT);
    yield put(actionCreateUserSuccess(data.createCustomer));
    yield put(actionLoadingSuccess());
  } catch (err: any) {
    yield put(loginError(err));
  }
}
