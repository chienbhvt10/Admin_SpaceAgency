import { isJsonString } from './string';
import moment from 'moment';
import env from 'env';
import { Jwt, LoginAdmin } from 'graphql/generated/graphql';

let TOKEN: any = '';
const TOKEN_KEY = env.tokenKey;

export const setAuthData = (authData: Jwt) => {
  localStorage.setItem(TOKEN_KEY, JSON.stringify(authData || {}));
  TOKEN = authData.token;
};

export const getAuthLocalData = () => {
  const authData = parseTokenString(localStorage.getItem(TOKEN_KEY) || '');
  if (!tokenChecker(authData)) {
    localStorage.removeItem(TOKEN_KEY);
    return null;
  }
  return authData;
};

export const getToken = () => {
  return TOKEN;
};

export const parseTokenString = (str: string) => {
  if (isJsonString(str)) {
    const authObject: Jwt = JSON.parse(str);
    return authObject;
  }
  return null;
};

export const tokenChecker = (authData: Jwt | null) => {
  if (!authData || !authData.token || authData.expiresAt > moment().unix()) return false;
  return true;
};
