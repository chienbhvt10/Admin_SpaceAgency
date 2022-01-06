import { CommonPath } from 'commons/base-routes';
import PageHeader from 'commons/components/layouts/PageHeader';
import UserLayout from 'commons/components/layouts/User';
import { TypeForm } from 'commons/type';
import { setTitle } from 'helpers/dom';
import CreateUserForm from 'modules/UserManagement/components/UserForm';
import { useCreateUser } from 'modules/UserManagement/hooks/useCreateUser';
import React from 'react';

function NewUser() {
  const { loading } = useCreateUser();
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
      breadcrumbName: 'User Management',
    },
    {
      path: CommonPath.USERS_MANAGEMENT_NEW,
      breadcrumbName: 'Create User Management',
    },
  ];
  return (
    <UserLayout>
      <PageHeader title="Create User" breadcrumb={{ routes }} />
      <CreateUserForm type={TypeForm.CREATE} loading={loading} />
    </UserLayout>
  );
}

export default NewUser;
