import {
  CreateMaterialsActionTypes,
  CreateMaterialsState,
  CREATE_MATERIALS,
  CREATE_MATERIALS_ERROR,
  CREATE_MATERIALS_SUCCESS,
} from '../action-types';

const initialState: CreateMaterialsState = {
  loading: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: CreateMaterialsActionTypes): CreateMaterialsState => {
  switch (action.type) {
    case CREATE_MATERIALS:
      return {
        ...state,
        loading: true,
      };

    case CREATE_MATERIALS_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case CREATE_MATERIALS_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
