import { AppError } from 'commons/type';
import { CreateMaterial, CreateMaterialVariables } from 'graphql/generated/graphql';
import {
  CreateMaterialsActionTypes,
  CREATE_MATERIALS,
  CREATE_MATERIALS_ERROR,
  CREATE_MATERIALS_SUCCESS,
} from '../action-types';

export const actionCreateMaterials = (payload: CreateMaterialVariables): CreateMaterialsActionTypes => ({
  type: CREATE_MATERIALS,
  payload,
});

export const actionCreateMaterialsUserError = (payload: AppError): CreateMaterialsActionTypes => ({
  type: CREATE_MATERIALS_ERROR,
  payload,
});

export const actionCreateMaterialsUserSuccess = (payload: CreateMaterial): CreateMaterialsActionTypes => ({
  type: CREATE_MATERIALS_SUCCESS,
  payload,
});
