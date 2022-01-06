import { PieChartOutlined, UserOutlined, ContainerOutlined } from '@ant-design/icons';
import { DataNav, INameNav } from 'commons/type';
import React from 'react';
interface IProps {
  item: DataNav;
}
const renderIcon = (props: IProps) => {
  const { name } = props.item;
  if (name === INameNav.SIMULATION_MANAGEMENT) {
    return <PieChartOutlined />;
  }
  if (name === INameNav.CONTENT_MANAGEMENT) {
    return <UserOutlined />;
  }
  if (name === INameNav.ADMINISTRATOR) {
    return <ContainerOutlined />;
  }
  return <PieChartOutlined />;
};

export default renderIcon;
