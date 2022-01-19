import { all, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../action-types';
import { removeThemeAsync } from './remove-theme';
import { getThemesAsync } from './themes';
import { detailThemeAsync } from './detail-theme';

export default function* root() {
  yield all([takeLatest(actionTypes.REMOVE_THEME, removeThemeAsync)]);
  yield all([takeLatest(actionTypes.THEMES, getThemesAsync)]);
  yield all([takeLatest(actionTypes.DETAIL_THEME, detailThemeAsync)]);
}
