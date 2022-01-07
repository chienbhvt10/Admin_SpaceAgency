import { CommonPath } from 'commons/base-routes';
import PageHeader from 'commons/components/layouts/PageHeader';
import UserLayout from 'commons/components/layouts/User';
import { setTitle } from 'helpers/dom';
import { useListUser } from 'modules/UserManagement/hooks/useListUser';
import React from 'react';
import { useNavigate } from 'react-router';
import TableUser from './Table';

const UserPage = () => {
  const { items, loading } = useListUser();
  const navigate = useNavigate();
  React.useEffect(() => {
    setTitle('User Management');
  }, []);
  const rowKey = (item: any) => `${item._id}`;
  const handleAdd = () => {
    navigate(CommonPath.USERS_MANAGEMENT_NEW);
  };
  const onChange = () => {};
  const routes = [
    {
      path: CommonPath.DEFAULT_PATH,
      breadcrumbName: 'Home',
    },
    {
      path: CommonPath.USERS_MANAGEMENT,
      breadcrumbName: 'User Management',
    },
  ];
  return (
    <UserLayout>
      <PageHeader title="" breadcrumb={{ routes }} />
      <TableUser items={items} rowKey={rowKey} loading={loading} onChange={onChange} handleAdd={handleAdd} />
    </UserLayout>
  );
};

export default UserPage;
