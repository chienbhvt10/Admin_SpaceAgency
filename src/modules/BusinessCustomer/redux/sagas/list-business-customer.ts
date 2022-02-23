import { GetListBusinessCustomers, GetTotalCount, SchemaType } from 'graphql/generated/graphql';
import * as apis from 'modules/BusinessCustomer/services/apis';
import { put } from 'redux-saga/effects';
import { actionLoadingSuccess } from 'redux/actions';
import { BusinessCustomersAction } from '../action-types';
import { actionBusinessCustomersError, actionBusinessCustomersSuccess } from '../actions';
export function* getListBusinessCustomersAsync(action: BusinessCustomersAction) {
  try {
    const data: GetListBusinessCustomers = yield apis.getListBusinessCustomers(action.payload);
    // const totalBusinessCustomers: GetTotalCount = yield apis.getListBusinessCustomers({
    //   type: SchemaType.Material,
    //   where: { ...action.payload.where },
    // });
    if (data.businessCustomers) {
      yield put(
        actionBusinessCustomersSuccess({
          dataBusinessCustomers: data.businessCustomers,
          pagination: {
            skip: action.payload.pagination?.skip,
            limit: action.payload.pagination?.limit,
          },
          // total: totalBusinessCustomers.count,
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
    yield put(actionBusinessCustomersError(err));
  }
}
