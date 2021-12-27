import { GetAllUser, Me } from 'graphql/generated/graphql';
import { put } from 'redux-saga/effects';
import { actionLoadingSuccess } from 'redux/actions';
import * as apis from '../../services/apis';
import { GetListUserAction } from '../action-types';
import { getAllUserError, getAllUserSuccess } from '../actions';

export function* getAllUserAsync(action: GetListUserAction) {
  try {
    const payload: GetAllUser = yield apis.getAllUserApi({ deleted: action.payload });
    yield put(getAllUserSuccess(payload.getAllUser));
    yield put(actionLoadingSuccess());
  } catch (err: any) {
    yield put(getAllUserError(err));
  }
}

// export function* logoutFlow() {
//   localStorage.removeItem(TOKEN_KEY);
// }
