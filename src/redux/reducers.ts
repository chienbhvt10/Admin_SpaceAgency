import { combineReducers } from 'redux';
import auth, { AuthModuleState } from 'modules/Auth/redux/reducers';
// import user, { UserModuleState } from 'modules/UserManagement/redux/reducers';

import loadingReducer from '../utils/loading/redux/loadingReducer';
import { LoadingState } from './action-types';

export interface RootState {
  auth: AuthModuleState;
  // user: UserModuleState;
  loadingReducer: LoadingState;
}

export default combineReducers<RootState>({
  auth,
  loadingReducer,
  // user,
});
