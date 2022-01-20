import { AppError } from 'commons/type';
import { IMaterial, RemoveMaterialVariables } from 'graphql/generated/graphql';
export const REMOVE_MATERIAL = 'REMOVE_MATERIAL';
export const REMOVE_MATERIAL_SUCCESS = 'REMOVE_MATERIAL_SUCCESS';
export const REMOVE_MATERIAL_ERROR = 'REMOVE_MATERIAL_ERROR';

export interface RemoveMaterialState {
  loading: boolean;
}

export interface RemoveMaterialAction {
  type: typeof REMOVE_MATERIAL;
  payload: RemoveMaterialVariables;
}

export interface RemoveMaterialActionSuccess {
  type: typeof REMOVE_MATERIAL_SUCCESS;
  payload: IMaterial;
}

export interface RemoveMaterialActionError {
  type: typeof REMOVE_MATERIAL_ERROR;
  payload: AppError;
}
export type RemoveMaterialActionTypes = RemoveMaterialAction | RemoveMaterialActionSuccess | RemoveMaterialActionError;
