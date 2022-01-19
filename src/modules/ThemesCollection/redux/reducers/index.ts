import { combineReducers } from 'redux';
import { ThemesState, RemoveThemeState, DetailThemeState } from '../action-types';
import themes from './themes';
import removeTheme from './remove-theme';
import detailTheme from './detail-theme';

export interface ThemesModuleState {
  themesState: ThemesState;
  removeState: RemoveThemeState;
  detailState: DetailThemeState;
}

export default combineReducers<ThemesModuleState>({
  themesState: themes,
  removeState: removeTheme,
  detailState: detailTheme,
});
