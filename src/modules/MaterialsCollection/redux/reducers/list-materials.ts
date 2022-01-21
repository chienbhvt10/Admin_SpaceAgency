import { TypePagination } from 'commons/type';
import { MATERIALS, MaterialsActionTypes, MaterialsState, MATERIALS_ERROR, MATERIALS_SUCCESS } from '../action-types';

const initialState: MaterialsState = {
  loading: false,
  pagination: {
    skip: TypePagination.DEFAULT_SKIP,
    limit: TypePagination.DEFAULT_LIMIT,
  },
  where: {
    filter: [],
    sort: [],
  },
  total: 100,
  dataMaterials: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: MaterialsActionTypes): MaterialsState => {
  switch (action.type) {
    case MATERIALS:
      return {
        ...state,
        loading: true,
      };

    case MATERIALS_SUCCESS:
      return {
        ...state,
        loading: false,
        pagination: action.payload.pagination,
        where: action.payload.where,
        total: action.payload.total,
        dataMaterials: action.payload.dataMaterials,
      };
    case MATERIALS_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
