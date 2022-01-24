import { combineReducers } from 'redux';
import auth, { AuthModuleState } from 'modules/Auth/redux/reducers';
import themes, { ThemesModuleState } from 'modules/ThemesCollection/redux/reducers';
import users, { UsersModuleState } from 'modules/UserManagement/redux/reducers';
import styles, { StylesModuleState } from 'modules/StylesCollection/redux/reducers';
import materials, { MaterialsModuleState } from 'modules/MaterialsCollection/redux/reducers';
import simulations, { SimulationsModuleState } from 'modules/CustomerSimulation/redux/reducers';

import loadingReducer from '../utils/loading/redux/loadingReducer';
import { LoadingState } from './action-types';

export interface RootState {
  auth: AuthModuleState;
  themes: ThemesModuleState;
  users: UsersModuleState;
  loadingReducer: LoadingState;
  styles: StylesModuleState;
  materials: MaterialsModuleState;
  simulations: SimulationsModuleState;
}

export default combineReducers<RootState>({
  auth,
  loadingReducer,
  themes,
  users,
  styles,
  materials,
  simulations,
});
