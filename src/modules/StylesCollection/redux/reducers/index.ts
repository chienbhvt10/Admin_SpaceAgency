import { combineReducers } from 'redux';
import { CreateStyleState, DetailStyleState, RemoveStyleState, StylesState, UpdateStyleState } from '../action-types';
import createStyle from './create-style';
import detailStyle from './detail-style';
import listStyles from './list-styles';
import removeStyle from './remove-style';
import updateStyle from './update-style';

export interface StylesModuleState {
  stylesState: StylesState;
  detailStyle: DetailStyleState;
  updateStyle: UpdateStyleState;
  createStyle: CreateStyleState;
  removeStyle: RemoveStyleState;
}

export default combineReducers<StylesModuleState>({
  stylesState: listStyles,
  detailStyle: detailStyle,
  updateStyle: updateStyle,
  createStyle: createStyle,
  removeStyle: removeStyle,
});
