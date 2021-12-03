// export const formatString = (str: string) => {
import { dataNav } from 'commons/type';
//   if (str) return str.replace(/[&\/\\#,+()$~%.'":*?<>{}\[\]^|]/g, '');
//   return str;
// };

export const isJsonString = (str: string) => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};
export const findDataNav = (key: string) => {
  return dataNav.find((item) => item.key === key);
};
