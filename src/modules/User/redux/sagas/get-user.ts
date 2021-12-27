import { GetUser } from 'graphql/generated/graphql';
import { put } from 'redux-saga/effects';
import { actionLoadingSuccess } from 'redux/actions';
import * as apis from '../../services/apis';
import { GetDetailUserAction } from '../action-types';
import { getDetailUserError, getDetailUserSuccess } from '../actions';

export function* getDetailUserAsync(action: GetDetailUserAction) {
  try {
    const payload: GetUser = yield apis.getUserDetailApi({ id: action.payload });
    yield put(getDetailUserSuccess(payload.getUser));
    yield put(actionLoadingSuccess());
  } catch (err: any) {
    yield put(getDetailUserError(err));
  }
}

// export function* logoutFlow() {
//   localStorage.removeItem(TOKEN_KEY);
// }
