import {
  DetailMaterialActionTypes,
  DetailMaterialState,
  DETAIL_MATERIAL,
  DETAIL_MATERIAL_ERROR,
  DETAIL_MATERIAL_SUCCESS,
} from '../action-types';

const initialState: DetailMaterialState = {
  loading: false,
  dataMaterial: undefined,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: DetailMaterialActionTypes): DetailMaterialState => {
  switch (action.type) {
    case DETAIL_MATERIAL:
      return {
        ...state,
        loading: true,
      };

    case DETAIL_MATERIAL_SUCCESS:
      return {
        ...state,
        loading: false,
        dataMaterial: action.payload,
      };
    case DETAIL_MATERIAL_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
