import PageHeader from 'commons/components/layouts/PageHeader';
import UserLayout from 'commons/components/layouts/User';
import { setTitle } from 'helpers/dom';
import CreateUserForm from 'modules/User/components/CreateUserForm';
import React from 'react';

function NewUser() {
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
      path: '/user/new',
      breadcrumbName: 'Create User',
    },
  ];
  return (
    <UserLayout>
      <PageHeader title="Create User" breadcrumb={{ routes }} />
      <CreateUserForm loading={false} />
    </UserLayout>
  );
}

export default NewUser;
