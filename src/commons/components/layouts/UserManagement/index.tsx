import React from 'react';
import EmptyLayout from '../Empty';

interface IProps {
  children: React.ReactNode;
}
const UserManagementLayout = (props: IProps) => {
  return <EmptyLayout>{props.children}</EmptyLayout>;
};

export default UserManagementLayout;
