import { combineReducers } from 'redux';
import { ThemesState, RemoveThemeState, DetailThemeState, CreateThemeState, UpdateThemeState } from '../action-types';
import themes from './themes';
import removeTheme from './remove-theme';
import detailTheme from './detail-theme';
import createTheme from './create-theme';
import updateTheme from './update-theme';

export interface ThemesModuleState {
  themesState: ThemesState;
  removeState: RemoveThemeState;
  detailState: DetailThemeState;
  createState: CreateThemeState;
  updateState: UpdateThemeState;
}

export default combineReducers<ThemesModuleState>({
  themesState: themes,
  removeState: removeTheme,
  detailState: detailTheme,
  createState: createTheme,
  updateState: updateTheme,
});
