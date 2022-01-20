import removeStyleState from './remove-style';
import createStyleState from './create-style';
import getListStyleState from './list-style';
import getStyleState from './get-style';
import { combineReducers } from 'redux';
import { CreateStyleState, StyleState, GetStyleState, RemoveStyleState, UpdateStyleState } from '../action-types';
export interface StyleModuleState {
  getStyleState: GetStyleState;
  getListStyleState: StyleState;
  createStyleState: CreateStyleState;
  removeStyleState: RemoveStyleState;
}

export default combineReducers<StyleModuleState>({
  getStyleState,
  createStyleState,
  removeStyleState,
  getListStyleState,
});
