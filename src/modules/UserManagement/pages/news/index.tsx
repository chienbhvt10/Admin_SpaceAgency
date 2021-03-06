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
    setTitle('ユーザー管理');
  }, []);
  const routes = [
    {
      path: CommonPath.DEFAULT_PATH,
      breadcrumbName: 'HOME',
    },
    {
      path: CommonPath.USERS_MANAGEMENT,
      breadcrumbName: 'ユーザー管理',
    },
    {
      path: CommonPath.USERS_MANAGEMENT_DETAIL,
      breadcrumbName: 'ユーザー追加',
    },
  ];
  return (
    <UserManagementLayout>
      <PageHeader title="" breadcrumb={{ routes }} />
      <DetailUserForm title="ユーザー追加" type={TypeForm.CREATE} loading={loading} />
    </UserManagementLayout>
  );
}

export default NewUserManagement;
