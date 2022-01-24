import { combineReducers } from 'redux';
import { SimulationsState } from '../action-types';
import simulations from './list-simulations';

export interface SimulationsModuleState {
  simulationsState: SimulationsState;
}

export default combineReducers<SimulationsModuleState>({
  simulationsState: simulations,
});
