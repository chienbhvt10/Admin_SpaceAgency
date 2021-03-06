import { LoginAdminVariables } from 'graphql/generated/graphql';
import { getSDK } from 'services/graphql-caller';

export const loginApi = async (variables: LoginAdminVariables) => {
  const sdk = getSDK(false);
  return sdk.loginAdmin(variables);
};
export const me = async () => {
  const sdk = getSDK(true);
  return sdk.me();
};
