import {
  CreateThemeCategoryVariables,
  CreateThemeVariables,
  GetDetailThemeVariables,
  GetListThemesVariables,
  GetTotalCountVariables,
  RemoveThemeVariables,
  SchemaType,
  UpdateThemeCategoryVariables,
  UpdateThemeVariables,
} from 'graphql/generated/graphql';
import { getSDK } from 'services/graphql-caller';

export const getThemes = async (variables?: GetListThemesVariables) => {
  const sdk = getSDK(true);
  return sdk.getListThemes(variables);
};
export const getDetailTheme = async (variables: GetDetailThemeVariables) => {
  const sdk = getSDK(true);
  return sdk.getDetailTheme(variables);
};
export const createTheme = async (variables: CreateThemeVariables) => {
  const sdk = getSDK(true);
  return sdk.createTheme(variables);
};
export const updateTheme = async (variables: UpdateThemeVariables) => {
  const sdk = getSDK(true);
  return sdk.updateTheme(variables);
};
export const createThemeCategory = async (variables: CreateThemeCategoryVariables) => {
  const sdk = getSDK(true);
  return sdk.createThemeCategory(variables);
};

export const updateThemeCategory = async (variables: UpdateThemeCategoryVariables) => {
  const sdk = getSDK(true);
  return sdk.updateThemeCategory(variables);
};

export const removeTheme = async (variables: RemoveThemeVariables) => {
  const sdk = getSDK(true);
  return sdk.removeTheme(variables);
};
export const getTotalThemes = async (variables: GetTotalCountVariables) => {
  const sdk = getSDK(true);
  return sdk.getTotalCount(variables);
};
