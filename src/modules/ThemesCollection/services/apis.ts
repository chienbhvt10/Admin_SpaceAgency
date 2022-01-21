import {
  GetDetailThemeVariables,
  GetListThemesVariables,
  GetTotalCountVariables,
  RemoveThemeVariables,
  SchemaType,
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
export const removeTheme = async (variables: RemoveThemeVariables) => {
  const sdk = getSDK(true);
  return sdk.removeTheme(variables);
};
export const getTotalThemes = async (variables: GetTotalCountVariables) => {
  const sdk = getSDK(true);
  return sdk.getTotalCount(variables);
};
