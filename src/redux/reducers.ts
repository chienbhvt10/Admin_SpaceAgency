import { combineReducers } from 'redux';
import auth, { AuthModuleState } from 'modules/Auth/redux/reducers';
import themes, { ThemesModuleState } from 'modules/ThemesCollection/redux/reducers';
import users, { UsersModuleState } from 'modules/UserManagement/redux/reducers';
import styles, { StylesModuleState } from 'modules/StylesCollection/redux/reducers';
import materials, { MaterialsModuleState } from 'modules/MaterialsCollection/redux/reducers';
import simulations, { SimulationsModuleState } from 'modules/CustomerSimulation/redux/reducers';
import loadingReducer from '../utils/loading/redux/loadingReducer';
import resetFilterReducer from '../utils/reset-filter/redux/reset-filter';

import { LoadingState, ResetFilterState } from './action-types';
import requests, { RequestsModuleState } from 'modules/Request/redux/reducers';

export interface RootState {
  auth: AuthModuleState;
  themes: ThemesModuleState;
  users: UsersModuleState;
  loadingReducer: LoadingState;
  resetFilterReducer: ResetFilterState;
  styles: StylesModuleState;
  materials: MaterialsModuleState;
  simulations: SimulationsModuleState;
  requests: RequestsModuleState;
}

export default combineReducers<RootState>({
  auth,
  loadingReducer,
  resetFilterReducer,
  themes,
  users,
  styles,
  materials,
  simulations,
  requests,
});
