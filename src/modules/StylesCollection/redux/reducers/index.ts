import deleteStyleState, { DeleteStyleState } from './delete-style';
import updateStyleState, { UpdateStyleState } from './update-style';
import createStyleState, { CreateStyleState } from './create-style';
import getListStyleState, { GetListStyleState } from './list-style';
import getStyleState, { GetStyleState } from './get-style';
import { combineReducers } from 'redux';
export interface StyleModuleState {
  getStyleState: GetStyleState;
  getListStyleState: GetListStyleState;
  createStyleState: CreateStyleState;
  updateStyleState: UpdateStyleState;
  deleteStyleState: DeleteStyleState;
}

export default combineReducers<StyleModuleState>({
  getStyleState,
  createStyleState,
  deleteStyleState,
  getListStyleState,
  updateStyleState,
});
