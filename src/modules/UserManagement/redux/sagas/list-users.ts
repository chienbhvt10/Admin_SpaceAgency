import { GetListUsers, GetTotalCount, SchemaType } from 'graphql/generated/graphql';
import { UsersAction } from '../action-types';
import * as apis from 'modules/UserManagement/services/apis';
import { actionUsersSuccess } from '../actions';
import { put } from 'redux-saga/effects';
import { actionLoadingSuccess } from 'redux/actions';
import { loginError } from 'modules/Auth/redux/actions';
export function* getListUsersAsync(action: UsersAction) {
  try {
    const data: GetListUsers = yield apis.getListUsers(action.payload);
    const totalStyles: GetTotalCount = yield apis.getTotalUsers({
      type: SchemaType.Theme,
      where: { ...action.payload.where },
    });
    yield put(
      actionUsersSuccess({
        dataUsers: data.users,
        pagination: {
          skip: action.payload.pagination?.skip,
          limit: action.payload.pagination?.limit,
        },
        total: totalStyles.count,
        where: {
          filter: action.payload.where?.filter,
          sort: action.payload.where?.sort,
        },
      }),
    );
    yield put(actionLoadingSuccess());
  } catch (err: any) {
    yield put(loginError(err));
  }
}
