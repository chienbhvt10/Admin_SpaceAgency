import { CommonPath } from 'commons/base-routes';
import PageHeader from 'commons/components/layouts/PageHeader';
import UserLayout from 'commons/components/layouts/User';
import { TypeForm } from 'commons/type';
import { setTitle } from 'helpers/dom';
import DetailUserForm from 'modules/UserManagement/components/UserForm';
import { useDetailUser } from 'modules/UserManagement/hooks/useDetailUser';
import { useUpdateUser } from 'modules/UserManagement/hooks/useUpdateUser';
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
      path: CommonPath.DEFAULT_PATH,
      breadcrumbName: 'Home',
    },
    {
      path: CommonPath.USERS_MANAGEMENT,
      breadcrumbName: 'User management',
    },
    {
      path: CommonPath.USERS_MANAGEMENT_DETAIL,
      breadcrumbName: 'Detail User Management',
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
