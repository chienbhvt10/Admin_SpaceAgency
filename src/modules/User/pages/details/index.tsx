import { CommonPath } from 'commons/base-routes';
import PageHeader from 'commons/components/layouts/PageHeader';
import UserLayout from 'commons/components/layouts/User';
import { TypeForm } from 'commons/type';
import { setTitle } from 'helpers/dom';
import DetailUserForm from 'modules/User/components/UserForm';
import { useDetailUser } from 'modules/User/hooks/useDetailUser';
import { useUpdateUser } from 'modules/User/hooks/useUpdateUser';
import React from 'react';
import { useParams } from 'react-router';

function DetailUser() {
  let { id } = useParams<'id'>();
  const { item } = useDetailUser(id);
  const { loading: loadingUpdate } = useUpdateUser();

  React.useEffect(() => {
    setTitle('Create User');
  }, []);
  const routes = [
    {
      path: '/',
      breadcrumbName: 'Home',
    },
    {
      path: '/user',
      breadcrumbName: 'User',
    },
    {
      path: '/user/detail',
      breadcrumbName: 'Detail User',
    },
  ];
  return (
    <UserLayout>
      <PageHeader title="Detail User" breadcrumb={{ routes }} />
      <DetailUserForm type={TypeForm.UPDATE} item={item} loading={loadingUpdate} />
    </UserLayout>
  );
}

export default DetailUser;
