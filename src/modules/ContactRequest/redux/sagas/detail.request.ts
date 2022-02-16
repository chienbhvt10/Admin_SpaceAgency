import { GetRequest } from 'graphql/generated/graphql';
import * as apis from 'modules/ContactRequest/services/apis';
import { put } from 'redux-saga/effects';
import { actionLoadingSuccess } from 'redux/actions';
import { DetailRequestAction } from '../action-types';
import { actionDetailRequestError, actionDetailRequestSuccess } from '../actions';
export function* getRequestAsync(action: DetailRequestAction) {
  try {
    const data: GetRequest = yield apis.getRequest(action.payload);
    if (data.request) yield put(actionDetailRequestSuccess(data.request));
    yield put(actionLoadingSuccess());
  } catch (err: any) {
    yield put(actionDetailRequestError(err));
  }
}
