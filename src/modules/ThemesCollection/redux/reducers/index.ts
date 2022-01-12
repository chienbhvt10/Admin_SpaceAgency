import { combineReducers } from 'redux';
import { ThemesState } from '../action-types';
import themes from './themes';

export interface ThemesModuleState {
  themesState: ThemesState;
}

export default combineReducers<ThemesModuleState>({
  themesState: themes,
});
