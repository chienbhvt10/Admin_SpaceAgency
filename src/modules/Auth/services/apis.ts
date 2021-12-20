import { LoginAdminInput } from 'graphql/generated/graphql';
import { getSDK } from 'services/graphql-caller';

export const loginApi = async (loginAdminInput: LoginAdminInput) => {
  const sdk = getSDK(false);
  return sdk.loginAdmin({ loginAdminInput });
};
