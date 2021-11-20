export interface ENV {
  apiEndPoint: string;
  root: string;
  pageTitle: string;
  tokenKey: string;
}

const cwd = process.cwd();
const root = __dirname.replace(`${cwd}`, '.');
const env: ENV = {
  apiEndPoint: process.env.REACT_APP_API_END_POINT || '',
  root,
  pageTitle: process.env.REACT_APP_PAGE_TITLE || '',
  tokenKey: process.env.REACT_APP_TOKEN_KEY || '',
};

export default env;
