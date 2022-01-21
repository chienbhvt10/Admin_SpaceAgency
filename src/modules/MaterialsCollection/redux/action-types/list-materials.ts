import { AppError } from 'commons/type';
import { GetListMaterialsVariables, IMaterial, PaginationInput, WhereInput } from 'graphql/generated/graphql';
export const MATERIALS = 'MATERIALS';
export const MATERIALS_SUCCESS = 'MATERIALS_SUCCESS';
export const MATERIALS_ERROR = 'MATERIALS_ERROR';
export interface MaterialsData {
  pagination?: PaginationInput;
  total?: number;
  where?: WhereInput;
  dataMaterials: IMaterial[];
}
export interface MaterialsState {
  loading: boolean;
  pagination?: PaginationInput;
  total?: number;
  where?: WhereInput;
  dataMaterials?: IMaterial[];
}

export interface MaterialsAction {
  type: typeof MATERIALS;
  payload: GetListMaterialsVariables;
}

export interface MaterialsActionSuccess {
  type: typeof MATERIALS_SUCCESS;
  payload: MaterialsData;
}

export interface MaterialsActionError {
  type: typeof MATERIALS_ERROR;
  payload: AppError;
}
export type MaterialsActionTypes = MaterialsAction | MaterialsActionSuccess | MaterialsActionError;
