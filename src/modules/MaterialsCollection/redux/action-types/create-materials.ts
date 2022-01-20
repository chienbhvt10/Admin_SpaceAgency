import { AppError } from 'commons/type';
import { CreateMaterial, CreateMaterialVariables } from 'graphql/generated/graphql';
export const CREATE_MATERIALS = 'CREATE_MATERIALS';
export const CREATE_MATERIALS_SUCCESS = 'CREATE_MATERIALS_SUCCESS';
export const CREATE_MATERIALS_ERROR = 'CREATE_MATERIALS_ERROR';

export interface CreateMaterialsState {
  loading: boolean;
}

export interface CreateMaterialsAction {
  type: typeof CREATE_MATERIALS;
  payload: CreateMaterialVariables;
}

export interface CreateMaterialsActionSuccess {
  type: typeof CREATE_MATERIALS_SUCCESS;
  payload: CreateMaterial;
}

export interface CreateMaterialsActionError {
  type: typeof CREATE_MATERIALS_ERROR;
  payload: AppError;
}
export type CreateMaterialsActionTypes =
  | CreateMaterialsAction
  | CreateMaterialsActionSuccess
  | CreateMaterialsActionError;
