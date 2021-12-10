import { LoginUserInput } from 'graphql/generated/graphql';
import { getSDK } from 'services/graphql-caller';

export const loginApi = async (loginInput: LoginUserInput) => {
  const sdk = getSDK(false);
  return sdk.login({ loginInput });
};
