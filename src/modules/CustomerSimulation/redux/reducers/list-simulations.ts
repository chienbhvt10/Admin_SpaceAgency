import { TypePagination } from 'commons/type';
import {
  LIST_SIMULATION,
  LIST_SIMULATION_ERROR,
  LIST_SIMULATION_SUCCESS,
  SimulationsActionTypes,
  SimulationsState,
} from '../action-types';

const initialState: SimulationsState = {
  loading: false,
  pagination: {
    skip: TypePagination.DEFAULT_SKIP,
    limit: TypePagination.DEFAULT_LIMIT,
  },
  where: {
    filter: [],
    sort: [],
  },
  dataSimulations: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: SimulationsActionTypes): SimulationsState => {
  switch (action.type) {
    case LIST_SIMULATION:
      return {
        ...state,
        loading: true,
      };

    case LIST_SIMULATION_SUCCESS:
      return {
        ...state,
        loading: false,
        pagination: {
          skip: action.payload.pagination?.skip,
          limit: action.payload.pagination?.limit,
        },
        where: action.payload.where,
        total: action.payload.total,
        dataSimulations: action.payload.dataSimulations,
      };
    case LIST_SIMULATION_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
