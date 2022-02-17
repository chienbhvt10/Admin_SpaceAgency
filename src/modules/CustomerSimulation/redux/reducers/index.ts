import { combineReducers } from 'redux';
import { SimulationsState, DetailSimulationState, RemoveSimulationState } from '../action-types';
import simulations from './list-simulations';
import detailSimulation from './detail-simulation';
import removeSimulation from './remove-simulation';

export interface SimulationsModuleState {
  simulationsState: SimulationsState;
  detailSimulationState: DetailSimulationState;
  removeSimulation: RemoveSimulationState;
}

export default combineReducers<SimulationsModuleState>({
  simulationsState: simulations,
  detailSimulationState: detailSimulation,
  removeSimulation: removeSimulation,
});
