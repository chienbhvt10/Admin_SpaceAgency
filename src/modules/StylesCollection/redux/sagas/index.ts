import { all, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../action-types';
import { createStyleAsync } from './create-style';
import { deleteStyleAsync } from './delete-style';
import { getStyleAsync } from './get-style';
import { getAllStyleAsync } from './list-style';
import { updateStyleAsync } from './update-style';
export default function* styleSagas() {
  yield all([takeLatest([actionTypes.GET_STYLE], getStyleAsync)]);
  yield all([takeLatest([actionTypes.GET_LIST_STYLE], getAllStyleAsync)]);
  yield all([takeLatest([actionTypes.CREATE_STYLE], createStyleAsync)]);
  yield all([takeLatest([actionTypes.UPDATE_STYLE], updateStyleAsync)]);
  yield all([takeLatest([actionTypes.DELETE_STYLE], deleteStyleAsync)]);
}
