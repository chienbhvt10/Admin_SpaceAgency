// export const formatString = (str: string) => {
import { SortOrder } from 'antd/lib/table/interface';
import { dataNav } from 'commons/type';
import { MaterialType, SortValue } from 'graphql/generated/graphql';
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
  return findMenu?.item?.find((item) => item.key === selectedKeys[0]);
};
export const NumberOfRow = (index: number, current: number, pageSize?: number) => {
  if (pageSize) {
    return (current - 1) * pageSize + index + 1;
  }
  return null;
};
export const OrderOfSorter = (order?: SortOrder) => {
  if (order === 'descend') {
    return SortValue.Desc;
  } else if (order === 'ascend') {
    return SortValue.Asc;
  }
  return order;
};
export function isEmpty(obj: Object) {
  for (var prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      return false;
    }
  }
  return JSON.stringify(obj) === JSON.stringify({});
}
export function findMaterialTypes(arr: MaterialType[], type: string) {
  // const findType=arr.find((i)=>i.)
}
