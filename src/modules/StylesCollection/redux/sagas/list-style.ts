import { put } from 'redux-saga/effects';
import { actionLoading, actionLoadingSuccess } from 'redux/actions';
import { GetListStyleAction } from '../action-types';
import { getListStyleError, getListStyleSuccess } from '../actions';

export function* getAllStyleAsync(action: GetListStyleAction) {
  try {
    const payload = false;
    yield put(getListStyleSuccess(payload));
    yield put(actionLoadingSuccess());
  } catch (err: any) {
    yield put(getListStyleError(err));
  }
}
