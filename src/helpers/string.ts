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
export const findDataNav = (selectedKeys: any[]) => {
  const findMenu = dataNav.find((i) => i.key === selectedKeys[1]);
  console.log(findMenu);
  return findMenu?.item?.find((item) => item.key === selectedKeys[0]);
};
