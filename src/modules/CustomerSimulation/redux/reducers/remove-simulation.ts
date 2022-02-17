import {
  RemoveSimulationActionTypes,
  RemoveSimulationState,
  REMOVE_SIMULATION,
  REMOVE_SIMULATION_ERROR,
  REMOVE_SIMULATION_SUCCESS,
} from '../action-types';

const initialState: RemoveSimulationState = {
  loading: false,
  dataRemoveSimulation: undefined,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: RemoveSimulationActionTypes): RemoveSimulationState => {
  switch (action.type) {
    case REMOVE_SIMULATION:
      return {
        ...state,
        loading: true,
      };

    case REMOVE_SIMULATION_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case REMOVE_SIMULATION_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
