import {
  RemoveMaterialActionTypes,
  RemoveMaterialState,
  REMOVE_MATERIAL,
  REMOVE_MATERIAL_ERROR,
  REMOVE_MATERIAL_SUCCESS,
} from '../action-types';

const initialState: RemoveMaterialState = {
  loading: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: RemoveMaterialActionTypes): RemoveMaterialState => {
  switch (action.type) {
    case REMOVE_MATERIAL:
      return {
        ...state,
        loading: true,
      };

    case REMOVE_MATERIAL_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case REMOVE_MATERIAL_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
