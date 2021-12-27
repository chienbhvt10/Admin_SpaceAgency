import { CommonPath } from 'commons/base-routes';
import PageHeader from 'commons/components/layouts/PageHeader';
import UserLayout from 'commons/components/layouts/User';
import { TypeForm } from 'commons/type';
import { setTitle } from 'helpers/dom';
import CreateUserForm from 'modules/User/components/UserForm';
import { useCreateUser } from 'modules/User/hooks/useCreateUser';
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
      path: CommonPath.USERS_PATH,
      breadcrumbName: 'User',
    },
    {
      path: CommonPath.USERS_PATH_NEW,
      breadcrumbName: 'Create User',
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
