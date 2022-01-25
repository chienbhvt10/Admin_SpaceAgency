import {
  DetailSimulationActionTypes,
  DetailSimulationState,
  DETAIL_SIMULATION,
  DETAIL_SIMULATION_ERROR,
  DETAIL_SIMULATION_SUCCESS,
} from '../action-types';

const initialState: DetailSimulationState = {
  loading: false,
  dataSimulation: undefined,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: DetailSimulationActionTypes): DetailSimulationState => {
  switch (action.type) {
    case DETAIL_SIMULATION:
      return {
        ...state,
        loading: true,
      };

    case DETAIL_SIMULATION_SUCCESS:
      return {
        ...state,
        loading: false,
        dataSimulation: action.payload,
      };
    case DETAIL_SIMULATION_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
