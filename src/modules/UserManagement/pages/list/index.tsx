import { Button, PageHeader, TablePaginationConfig } from 'antd';
import { CommonPath } from 'commons/base-routes';
import TableHeader from 'commons/components/layouts/TableHeader';
import UserManagementLayout from 'commons/components/layouts/UserManagement';
import { useListUsers } from 'modules/UserManagement/hooks/userListUsers';
import { PlusOutlined } from '@ant-design/icons';
import CustomUserManagementTable from './Table';
import { IUsersFields } from 'graphql/generated/graphql';
import { useRemoveUser } from 'modules/UserManagement/hooks/userRemoveUser';
import { useNavigate } from 'react-router-dom';

function ListUserManagement() {
  const { dataUsers, loading, paginationUser, updatePaginationUser, pagination } = useListUsers();
  const navigate = useNavigate();
  const { removeUser } = useRemoveUser();
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
  const onChange = (paginationTable: TablePaginationConfig) => {
    const limit = pagination.limit || 1;
    const current = paginationTable.current || 1;
    const skip = (current - 1) * limit;
    updatePaginationUser(skip, limit);
  };
  const onDelete = (record: IUsersFields) => () => {
    removeUser({
      id: record.id,
    });
  };
  const onEdit = (record: IUsersFields) => () => {
    navigate(CommonPath.USERS_MANAGEMENT_DETAIL);
  };
  return (
    <UserManagementLayout>
      <PageHeader title="" breadcrumb={{ routes }}></PageHeader>
      <TableHeader
        title="User Management"
        extra={
          <Button type="primary" icon={<PlusOutlined />}>
            New User
          </Button>
        }
      >
        <CustomUserManagementTable
          onDelete={onDelete}
          onEdit={onEdit}
          items={dataUsers}
          loading={loading}
          pagination={paginationUser}
          onChange={onChange}
        />
      </TableHeader>
    </UserManagementLayout>
  );
}

export default ListUserManagement;
