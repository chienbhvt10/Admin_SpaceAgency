import * as apis from 'modules/StylesCollection/services/apis';
import { GetListStyle } from 'graphql/generated/graphql';
import { put } from 'redux-saga/effects';
import { actionLoading, actionLoadingSuccess } from 'redux/actions';
import { GetListStyleAction } from '../action-types';
import { getListStyleError, getListStyleSuccess } from '../actions';

export function* getAllStyleAsync(action: GetListStyleAction) {
  try {
    const data: GetListStyle = yield apis.getAllStyleApi(action.payload);
    console.log(data);
    yield put(
      getListStyleSuccess({
        dataStyles: data.styles,
        pagination: {
          skip: action.payload.pagination?.skip,
          limit: action.payload.pagination?.limit,
        },
        where: {
          filter: action.payload.where?.filter,
          sort: action.payload.where?.sort,
        },
      }),
    );
    yield put(actionLoadingSuccess());
  } catch (err: any) {
    yield put(getListStyleError(err));
  }
}
