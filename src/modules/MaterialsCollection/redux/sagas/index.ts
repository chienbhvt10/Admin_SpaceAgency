import { all, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../action-types';
import { getListMaterialsAsync } from './list-materials';
import { createMaterialsAsync } from './create-materials';
export default function* root() {
  yield all([
    takeLatest(actionTypes.MATERIALS, getListMaterialsAsync),
    takeLatest(actionTypes.CREATE_MATERIALS, createMaterialsAsync),
  ]);
}
