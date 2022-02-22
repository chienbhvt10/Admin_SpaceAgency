import { GetListDocuments } from 'graphql/generated/graphql';
import * as apis from 'modules/DocumentRequest/services/apis';
import { put } from 'redux-saga/effects';
import { actionLoadingSuccess } from 'redux/actions';
import { DocumentsAction } from '../action-types';
import { actionDocumentsError, actionDocumentsSuccess } from '../actions';
export function* getListDocumentsAsync(action: DocumentsAction) {
  try {
    const data: GetListDocuments = yield apis.getListDocuments(action.payload);
    // const totalAppointments: GetTotalCount = yield apis.getListDocuments({
    //   type: SchemaType.Material,
    //   where: { ...action.payload.where },
    // });
    if (data.documentRequests) {
      yield put(
        actionDocumentsSuccess({
          dataDocuments: data.documentRequests,
          pagination: {
            skip: action.payload.pagination?.skip,
            limit: action.payload.pagination?.limit,
          },
          // total: totalAppointments.count,
          total: 1000,
          where: {
            filter: action.payload.where?.filter,
            sort: action.payload.where?.sort,
          },
        }),
      );
    }
    yield put(actionLoadingSuccess());
  } catch (err: any) {
    yield put(actionDocumentsError(err));
  }
}
