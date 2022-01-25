import { GetListRequest, GetListUsers, GetTotalCount, SchemaType } from 'graphql/generated/graphql';
import * as apis from 'modules/ContactRequest/services/apis';
import { put } from 'redux-saga/effects';
import { actionLoadingSuccess } from 'redux/actions';
import { RequestsAction } from '../action-types';
import { actionRequestsSuccess, actionRequestsError } from '../actions';
export function* getListRequestsAsync(action: RequestsAction) {
  try {
    const data: GetListRequest = yield apis.getListRequest(action.payload);
    const totalRequests: GetTotalCount = yield apis.getTotalRequest({
      type: SchemaType.Request,
      where: { ...action.payload.where },
    });
    yield put(
      actionRequestsSuccess({
        dataRequests: data.requests,
        pagination: {
          skip: action.payload.pagination?.skip,
          limit: action.payload.pagination?.limit,
        },
        total: totalRequests.count,
        where: {
          filter: action.payload.where?.filter,
          sort: action.payload.where?.sort,
        },
      }),
    );
    yield put(actionLoadingSuccess());
  } catch (err: any) {
    yield put(actionRequestsError(err));
  }
}
