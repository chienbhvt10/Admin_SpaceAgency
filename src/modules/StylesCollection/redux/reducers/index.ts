import { combineReducers } from 'redux';
import { StylesState } from '../action-types';
import listStyles from './list-styles';

export interface StylesModuleState {
  stylesState: StylesState;
}

export default combineReducers<StylesModuleState>({
  stylesState: listStyles,
});
