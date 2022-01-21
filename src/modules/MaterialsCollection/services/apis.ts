import {
  CreateMaterialVariables,
  GetDetailMaterialVariables,
  GetListMaterialsVariables,
  RemoveMaterialVariables,
  UpdateMaterialVariables,
} from 'graphql/generated/graphql';
import { getSDK } from 'services/graphql-caller';

export const getListMaterials = async (variables?: GetListMaterialsVariables) => {
  const sdk = getSDK(true);
  return sdk.getListMaterials(variables);
};
export const removeMaterial = async (variables: RemoveMaterialVariables) => {
  const sdk = getSDK(true);
  return sdk.removeMaterial(variables);
};
export const getMaterialsDetail = async (variables: GetDetailMaterialVariables) => {
  const sdk = getSDK(true);
  return sdk.getDetailMaterial(variables);
};
export const updateMaterials = async (variables: UpdateMaterialVariables) => {
  const sdk = getSDK(true);
  return sdk.updateMaterial(variables);
};
export const createMaterials = async (variables: CreateMaterialVariables) => {
  const sdk = getSDK(true);
  return sdk.createMaterial(variables);
};
