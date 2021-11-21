export interface ENV {
  apiEndPoint: string;
  root: string;
  pageTitle: string;
  tokenKey: string;
  token: string;
  timeout?: number;
}

const cwd = process.cwd();
const root = __dirname.replace(`${cwd}`, '.');
const env: ENV = {
  apiEndPoint: process.env.REACT_APP_API_END_POINT || '',
  root,
  pageTitle: process.env.REACT_APP_PAGE_TITLE || '',
  tokenKey: process.env.REACT_APP_TOKEN_KEY || '',
  token: process.env.REACT_APP_TOKEN || '',
};

export default env;
