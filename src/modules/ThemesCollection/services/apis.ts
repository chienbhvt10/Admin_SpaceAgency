import { GetListThemesVariables } from 'graphql/generated/graphql';
import { getSDK } from 'services/graphql-caller';

export const getThemes = async (variables?: GetListThemesVariables) => {
  const sdk = getSDK(true);
  return sdk.getListThemes(variables);
};
