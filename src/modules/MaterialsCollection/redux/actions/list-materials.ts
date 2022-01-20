import { AppError } from 'commons/type';
import { GetListMaterialsVariables } from 'graphql/generated/graphql';
import { MATERIALS, MaterialsActionTypes, MaterialsData, MATERIALS_ERROR, MATERIALS_SUCCESS } from '../action-types';

export const actionMaterials = (payload: GetListMaterialsVariables): MaterialsActionTypes => ({
  type: MATERIALS,
  payload,
});

export const actionMaterialsError = (payload: AppError): MaterialsActionTypes => ({
  type: MATERIALS_ERROR,
  payload,
});

export const actionMaterialsSuccess = (payload: MaterialsData): MaterialsActionTypes => ({
  type: MATERIALS_SUCCESS,
  payload,
});
