import {
  CreateStyleVariables,
  GetListStylesVariables,
  GetStyleVariables,
  RemoveStyleVariables,
  UpdateStyleVariables,
  SchemaType,
  GetTotalCountVariables,
} from 'graphql/generated/graphql';
import { getSDK } from 'services/graphql-caller';

export const getListStyle = async (variables?: GetListStylesVariables) => {
  const sdk = getSDK(true);
  return sdk.getListStyles(variables);
};
export const removeStyle = async (variables: RemoveStyleVariables) => {
  const sdk = getSDK(true);
  return sdk.removeStyle(variables);
};
export const getStyleDetail = async (variables: GetStyleVariables) => {
  const sdk = getSDK(true);
  return sdk.getStyle(variables);
};
export const updateStyle = async (variables: UpdateStyleVariables) => {
  const sdk = getSDK(true);
  return sdk.updateStyle(variables);
};
export const createStyle = async (variables: CreateStyleVariables) => {
  const sdk = getSDK(true);
  return sdk.createStyle(variables);
};
export const getTotalStyles = async (variables: GetTotalCountVariables) => {
  const sdk = getSDK(true);
  return sdk.getTotalCount(variables);
};
