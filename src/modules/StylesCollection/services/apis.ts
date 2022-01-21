import { GetListStylesVariables, SchemaType } from 'graphql/generated/graphql';
import { getSDK } from 'services/graphql-caller';

export const getListStyle = async (variables?: GetListStylesVariables) => {
  const sdk = getSDK(true);
  return sdk.getListStyles(variables);
};
export const deleteStyle = async (variables: any) => {
  return;
};
export const getStyleDetail = async (variables: any) => {
  return;
};
export const updateStyle = async (variables: any) => {
  return;
};
export const createStyle = async (variables: any) => {
  return;
};
export const getTotalStyles = async () => {
  const sdk = getSDK(true);
  return sdk.getTotalCount({ type: SchemaType.Style });
};
