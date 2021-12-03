import { PieChartOutlined, UserOutlined } from '@ant-design/icons';
import { DataNav, INameNav } from 'commons/type';
import React from 'react';
interface IProps {
  item: DataNav;
}
const renderIcon = (props: IProps) => {
  const { name } = props.item;
  if (name === INameNav.DASHBOARD) {
    return <PieChartOutlined />;
  }
  if (name === INameNav.USERS) {
    return <UserOutlined />;
  }
  return <PieChartOutlined />;
};

export default renderIcon;
