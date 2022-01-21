import { AppError } from 'commons/type';
import { IMaterial, UpdateMaterialVariables } from 'graphql/generated/graphql';
export const UPDATE_MATERIAL = 'UPDATE_MATERIAL';
export const UPDATE_MATERIAL_SUCCESS = 'UPDATE_MATERIAL_SUCCESS';
export const UPDATE_MATERIAL_ERROR = 'UPDATE_MATERIAL_ERROR';

export interface UpdateMaterialState {
  loading: boolean;
  dataMaterial?: IMaterial;
}

export interface UpdateMaterialAction {
  type: typeof UPDATE_MATERIAL;
  payload: UpdateMaterialVariables;
}

export interface UpdateMaterialActionSuccess {
  type: typeof UPDATE_MATERIAL_SUCCESS;
  payload: IMaterial;
}

export interface UpdateMaterialActionError {
  type: typeof UPDATE_MATERIAL_ERROR;
  payload: AppError;
}
export type UpdateMaterialActionTypes = UpdateMaterialAction | UpdateMaterialActionSuccess | UpdateMaterialActionError;
