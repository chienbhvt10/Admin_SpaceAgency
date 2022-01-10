import { put } from 'redux-saga/effects';
import { actionLoadingSuccess } from 'redux/actions';
import { GetStyleAction } from '../action-types';
import { getStyleError, getStyleSuccess } from '../actions';

export function* getStyleAsync(action: GetStyleAction) {
  try {
    const payload = false;
    yield put(getStyleSuccess(payload));
    yield put(actionLoadingSuccess());
  } catch (err: any) {
    yield put(getStyleError(err));
  }
}
