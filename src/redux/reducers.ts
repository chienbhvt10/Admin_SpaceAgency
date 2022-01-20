import { combineReducers } from 'redux';
import auth, { AuthModuleState } from 'modules/Auth/redux/reducers';
import themes, { ThemesModuleState } from 'modules/ThemesCollection/redux/reducers';
import users, { UsersModuleState } from 'modules/UserManagement/redux/reducers';
import loadingReducer from '../utils/loading/redux/loadingReducer';
import { LoadingState } from './action-types';
import styles, { StyleModuleState } from 'modules/StylesCollection/redux/reducers';
export interface RootState {
  auth: AuthModuleState;
  themes: ThemesModuleState;
  users: UsersModuleState;
  loadingReducer: LoadingState;
  styles: StyleModuleState;
}

export default combineReducers<RootState>({
  auth,
  loadingReducer,
  themes,
  users,
  styles,
});
