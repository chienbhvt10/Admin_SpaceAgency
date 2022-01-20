import { all, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../action-types';
import { getStylesAsync } from './list-styles';

export default function* root() {
  //   yield all([takeLatest(actionTypes.REMOVE_THEME, removeThemeAsync)]);
  yield all([takeLatest(actionTypes.STYLES, getStylesAsync)]);
  //   yield all([takeLatest(actionTypes.DETAIL_THEME, detailThemeAsync)]);
}
