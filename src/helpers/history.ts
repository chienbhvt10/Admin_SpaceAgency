import { NavigateFunction, To } from 'react-router';

let _navigate: NavigateFunction;
let _redirectUrl: string;

export const setNavigate = (navigate: NavigateFunction) => {
  _navigate = navigate;
};

export const getNavigate = (path: To) => {
  _navigate(path);
};

export const setRedirectUrl = (url: string) => {
  _redirectUrl = url;
};

export const getRedirectUrl = () => {
  return _redirectUrl;
};
