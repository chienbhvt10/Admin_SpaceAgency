import { AppError } from 'commons/type';
import { GetDetailMaterialVariables, IMaterial } from 'graphql/generated/graphql';
import {
  DetailMaterialActionTypes,
  DETAIL_MATERIAL,
  DETAIL_MATERIAL_ERROR,
  DETAIL_MATERIAL_SUCCESS,
} from '../action-types';

export const actionDetailMaterials = (payload: GetDetailMaterialVariables): DetailMaterialActionTypes => ({
  type: DETAIL_MATERIAL,
  payload,
});

export const actionDetailMaterialsError = (payload: AppError): DetailMaterialActionTypes => ({
  type: DETAIL_MATERIAL_ERROR,
  payload,
});

export const actionDetailMaterialsSuccess = (payload: IMaterial): DetailMaterialActionTypes => ({
  type: DETAIL_MATERIAL_SUCCESS,
  payload,
});
