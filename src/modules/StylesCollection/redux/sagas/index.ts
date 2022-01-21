import { all, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../action-types';
import { createStyleAsync } from './create-style';
import { detailStyleAsync } from './detail-style';
import { getStylesAsync } from './list-styles';
import { removeStyleAsync } from './remove-style';
import { updateStyleAsync } from './update-style';

export default function* root() {
  //   yield all([takeLatest(actionTypes.REMOVE_THEME, removeThemeAsync)]);
  //   yield all([takeLatest(actionTypes.DETAIL_THEME, detailThemeAsync)]);
  yield all([takeLatest(actionTypes.STYLES, getStylesAsync)]);
  yield all([takeLatest(actionTypes.REMOVE_STYLE, removeStyleAsync)]);
  yield all([takeLatest(actionTypes.DETAIL_STYLE, detailStyleAsync)]);
  yield all([takeLatest(actionTypes.UPDATE_STYLE, updateStyleAsync)]);
  yield all([takeLatest(actionTypes.CREATE_STYLE, createStyleAsync)]);
}
