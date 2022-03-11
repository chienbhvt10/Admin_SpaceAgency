// export const formatString = (str: string) => {
import { SortOrder } from 'antd/lib/table/interface';
import { dataNav } from 'commons/type';
import { MaterialType, RequestType, SortValue } from 'graphql/generated/graphql';
import moment from 'moment';
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

export function formatToDate(t: string) {
  return moment(t).format('L');
}
export function formatRequestType(type: RequestType) {
  if (type === RequestType.Meeting) {
    return '2';
  }
  if (type === RequestType.Other) {
    return '3';
  }
  if (type === RequestType.SendDocument) {
    return '1';
  }
  return undefined;
}
export function formatPriceJapan(price: number) {
  return new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(price);
}
export function formatPricePercent(percent: number) {
  if (percent === 0) {
    return 0;
  }
  return new Intl.NumberFormat('de-DE', {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(percent);
}
