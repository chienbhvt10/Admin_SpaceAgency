import { CommonPath } from 'commons/base-routes';
import PageHeader from 'commons/components/layouts/PageHeader';
import UserManagementLayout from 'commons/components/layouts/UserManagement';
import { TypeForm } from 'commons/type';
import { setTitle } from 'helpers/dom';
import DetailUserForm from 'modules/UserManagement/components/UserForm';
import { useCreateUser } from 'modules/UserManagement/hooks/useCreateUser';
import React from 'react';

function NewUserManagement() {
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
      breadcrumbName: 'User management',
    },
    {
      path: CommonPath.USERS_MANAGEMENT_DETAIL,
      breadcrumbName: 'Create User Management',
    },
  ];
  return (
    <UserManagementLayout>
      <PageHeader title="Detail User" breadcrumb={{ routes }} />
      <DetailUserForm type={TypeForm.CREATE} loading={loading} />
    </UserManagementLayout>
  );
}

export default NewUserManagement;
