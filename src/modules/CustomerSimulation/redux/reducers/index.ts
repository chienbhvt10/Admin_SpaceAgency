import { combineReducers } from 'redux';
import { SimulationsState, DetailSimulationState } from '../action-types';
import simulations from './list-simulations';
import detailSimulation from './detail-simulation';

export interface SimulationsModuleState {
  simulationsState: SimulationsState;
  detailSimulationState: DetailSimulationState;
}

export default combineReducers<SimulationsModuleState>({
  simulationsState: simulations,
  detailSimulationState: detailSimulation,
});
