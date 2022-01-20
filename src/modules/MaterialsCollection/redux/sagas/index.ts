import { all, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../action-types';
import { getListMaterialsAsync } from './list-materials';
export default function* root() {
  yield all([takeLatest(actionTypes.MATERIALS, getListMaterialsAsync)]);
}
