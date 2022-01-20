import { CreateMaterialVariables, GetListMaterialsVariables, GetListStylesVariables } from 'graphql/generated/graphql';
import { getSDK } from 'services/graphql-caller';

export const getListMaterials = async (variables?: GetListMaterialsVariables) => {
  const sdk = getSDK(true);
  return sdk.getListMaterials(variables);
};
export const deleteMaterials = async (variables: any) => {
  return;
};
export const getMaterialsDetail = async (variables: any) => {
  return;
};
export const updateMaterials = async (variables: any) => {
  return;
};
export const createMaterials = async (variables: CreateMaterialVariables) => {
  const sdk = getSDK(true);
  return sdk.createMaterial(variables);
};
