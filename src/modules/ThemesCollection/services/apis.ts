import { ThemesVariables } from 'graphql/generated/graphql';
import { getSDK } from 'services/graphql-caller';

export const getThemes = async (variables?: ThemesVariables) => {
  const sdk = getSDK(true);
  return sdk.themes(variables);
};
