import { combineReducers } from 'redux';
import { ThemesState } from '../action-types';
import themes from './themes';

export interface AuthModuleState {
  themesState: ThemesState;
}

export default combineReducers<AuthModuleState>({
  themesState: themes,
});
