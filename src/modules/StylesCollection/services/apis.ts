import {
  CreateStyleVariables,
  GetListStyleVariables,
  GetStyleVariables,
  RemoveStyleVariables,
  UpdateStyleVariables,
} from 'graphql/generated/graphql';
import { getSDK } from 'services/graphql-caller';

export const getAllStyleApi = async (variables: GetListStyleVariables) => {
  const sdk = getSDK(true);
  return sdk.getListStyle(variables);
};
export const removeStyleApi = async (variables: RemoveStyleVariables) => {
  const sdk = getSDK(true);
  return sdk.removeStyle(variables);
};
export const getStyleApi = async (variables: GetStyleVariables) => {
  const sdk = getSDK(true);
  return sdk.getStyle(variables);
};
export const updateStyleApi = async (variables: UpdateStyleVariables) => {
  const sdk = getSDK(true);
  return sdk.updateStyle(variables);
};
export const createStyleApi = async (variables: CreateStyleVariables) => {
  const sdk = getSDK(true);
  return sdk.createStyle(variables);
};
