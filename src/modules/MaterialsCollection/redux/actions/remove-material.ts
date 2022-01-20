import { AppError } from 'commons/type';
import { RemoveMaterialVariables, IMaterial } from 'graphql/generated/graphql';
import {
  RemoveMaterialActionTypes,
  REMOVE_MATERIAL,
  REMOVE_MATERIAL_ERROR,
  REMOVE_MATERIAL_SUCCESS,
} from '../action-types';

export const actionRemoveMaterial = (payload: RemoveMaterialVariables): RemoveMaterialActionTypes => ({
  type: REMOVE_MATERIAL,
  payload,
});

export const actionRemoveMaterialError = (payload: AppError): RemoveMaterialActionTypes => ({
  type: REMOVE_MATERIAL_ERROR,
  payload,
});

export const actionRemoveMaterialSuccess = (payload: IMaterial): RemoveMaterialActionTypes => ({
  type: REMOVE_MATERIAL_SUCCESS,
  payload,
});
