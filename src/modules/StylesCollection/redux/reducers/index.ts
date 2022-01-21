import { combineReducers } from 'redux';
import { RemoveStyleState, StylesState, DetailStyleState, CreateStyleState, UpdateStyleState } from '../action-types';
import listStyles from './list-styles';
import detailStyle from './detail-style';
import updateStyle from './update-style';
import createStyle from './create-style';
import removeStyle from './remove-style';

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
