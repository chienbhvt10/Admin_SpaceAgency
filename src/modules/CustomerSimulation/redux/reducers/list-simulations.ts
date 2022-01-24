import { TypePagination } from 'commons/type';
import { SortValue } from 'graphql/generated/graphql';
import {
  SimulationsActionTypes,
  SimulationsState,
  LIST_SIMULATION,
  LIST_SIMULATION_SUCCESS,
  LIST_SIMULATION_ERROR,
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
