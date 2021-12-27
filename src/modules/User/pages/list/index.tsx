import { CommonPath } from 'commons/base-routes';
import NewLayout from 'commons/components/layouts/New';
import PageHeader from 'commons/components/layouts/PageHeader';
import UserLayout from 'commons/components/layouts/User';
import { setTitle } from 'helpers/dom';
import { useListUser } from 'modules/User/hooks/useListUser';
import React from 'react';
import { useNavigate } from 'react-router';
import TableUser from './Table';

const UserPage = () => {
  const { items, loading } = useListUser();
  const navigate = useNavigate();
  React.useEffect(() => {
    setTitle('User');
  }, []);
  const rowKey = (item: any) => `${item._id}`;
  const handleAdd = () => {
    navigate(CommonPath.USERS_PATH_NEW);
  };
  const onChange = () => {};
  const routes = [
    {
      path: '/',
      breadcrumbName: 'Home',
    },
    {
      path: '/user/',
      breadcrumbName: 'User',
    },
  ];
  return (
    <UserLayout>
      <PageHeader title="List User" breadcrumb={{ routes }} />
      <TableUser items={items} rowKey={rowKey} loading={loading} onChange={onChange} handleAdd={handleAdd} />
    </UserLayout>
  );
};

export default UserPage;
