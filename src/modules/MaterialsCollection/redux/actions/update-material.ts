import { AppError } from 'commons/type';
import { IMaterial, UpdateMaterialVariables } from 'graphql/generated/graphql';
import {
  UpdateMaterialActionTypes,
  UPDATE_MATERIAL,
  UPDATE_MATERIAL_ERROR,
  UPDATE_MATERIAL_SUCCESS,
} from '../action-types';

export const actionUpdateMaterial = (payload: UpdateMaterialVariables): UpdateMaterialActionTypes => ({
  type: UPDATE_MATERIAL,
  payload,
});

export const actionUpdateMaterialError = (payload: AppError): UpdateMaterialActionTypes => ({
  type: UPDATE_MATERIAL_ERROR,
  payload,
});

export const actionUpdateMaterialSuccess = (payload: IMaterial): UpdateMaterialActionTypes => ({
  type: UPDATE_MATERIAL_SUCCESS,
  payload,
});
