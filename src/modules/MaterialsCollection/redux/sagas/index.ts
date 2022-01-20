import { all, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../action-types';
import { getListMaterialsAsync } from './list-materials';
import { createMaterialsAsync } from './create-materials';
import { removeMaterialAsync } from './remove-material';
import { detailMaterialAsync } from './detail-material';
export default function* root() {
  yield all([
    takeLatest(actionTypes.MATERIALS, getListMaterialsAsync),
    takeLatest(actionTypes.CREATE_MATERIALS, createMaterialsAsync),
    takeLatest(actionTypes.REMOVE_MATERIAL, removeMaterialAsync),
    takeLatest(actionTypes.DETAIL_MATERIAL, detailMaterialAsync),
  ]);
}
