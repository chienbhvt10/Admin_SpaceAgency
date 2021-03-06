import { CommonPath } from 'commons/base-routes';
import PageHeader from 'commons/components/layouts/PageHeader';
import UserManagementLayout from 'commons/components/layouts/UserManagement';
import { TypeForm } from 'commons/type';
import { setTitle } from 'helpers/dom';
import DetailUserForm from 'modules/UserManagement/components/UserForm';
import { useDetailUser } from 'modules/UserManagement/hooks/useDetailUser';
import { useUpdateUser } from 'modules/UserManagement/hooks/useUpdateUser';
import React from 'react';
import { useParams } from 'react-router';

function DetailUserManagement() {
  let { id } = useParams<'id'>();
  const { getDetailUser, item } = useDetailUser();
  const { loading: loadingUserUpdate } = useUpdateUser();

  React.useEffect(() => {
    if (id) {
      getDetailUser(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  React.useEffect(() => {
    setTitle('ユーザー情報の編集');
  }, []);
  const routes = [
    {
      path: CommonPath.DEFAULT_PATH,
      breadcrumbName: 'Home',
    },
    {
      path: CommonPath.USERS_MANAGEMENT,
      breadcrumbName: 'ユーザー管理',
    },
    {
      path: CommonPath.USERS_MANAGEMENT_DETAIL,
      breadcrumbName: 'ユーザー情報の編集',
    },
  ];
  return (
    <UserManagementLayout>
      <PageHeader title="" breadcrumb={{ routes }} />
      <DetailUserForm title="ユーザー情報の編集" type={TypeForm.UPDATE} item={item} loading={loadingUserUpdate} />
    </UserManagementLayout>
  );
}

export default DetailUserManagement;
