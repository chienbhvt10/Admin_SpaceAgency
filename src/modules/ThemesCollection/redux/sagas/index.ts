import { all, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../action-types';
import { getThemesAsync } from './themes';
export default function* root() {
  yield all([takeLatest(actionTypes.THEMES, getThemesAsync)]);
}
