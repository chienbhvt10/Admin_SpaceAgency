import { AppError } from 'commons/type';
import { GetDetailMaterialVariables, IMaterial } from 'graphql/generated/graphql';
export const DETAIL_MATERIAL = 'DETAIL_MATERIAL';
export const DETAIL_MATERIAL_SUCCESS = 'DETAIL_MATERIAL_SUCCESS';
export const DETAIL_MATERIAL_ERROR = 'DETAIL_MATERIAL_ERROR';

export interface DetailMaterialState {
  loading: boolean;
  dataMaterial?: IMaterial;
}

export interface DetailMaterialAction {
  type: typeof DETAIL_MATERIAL;
  payload: GetDetailMaterialVariables;
}

export interface DetailMaterialActionSuccess {
  type: typeof DETAIL_MATERIAL_SUCCESS;
  payload: IMaterial;
}

export interface DetailMaterialActionError {
  type: typeof DETAIL_MATERIAL_ERROR;
  payload: AppError;
}
export type DetailMaterialActionTypes = DetailMaterialAction | DetailMaterialActionSuccess | DetailMaterialActionError;
