import { PlusOutlined } from '@ant-design/icons';
import { Button, PageHeader, TablePaginationConfig } from 'antd';
import { CommonPath } from 'commons/base-routes';
import { FormSearch } from 'commons/components/layouts/FormSearch';
import TableHeader from 'commons/components/layouts/TableHeader';
import UserManagementLayout from 'commons/components/layouts/UserManagement';
import { TypeKeyFilterUser, TypePagination } from 'commons/type';
import { FilterInput, IUsersFields } from 'graphql/generated/graphql';
import { useListUsers } from 'modules/UserManagement/hooks/useListUsers';
import { useRemoveUser } from 'modules/UserManagement/hooks/useRemoveUser';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomUserManagementTable from './Table';

function ListUserManagement() {
  const { dataUsers, loading, paginationUser, updatePaginationUser, pagination, filterPaginationUser, where } =
    useListUsers();
  const navigate = useNavigate();
  const { removeUser } = useRemoveUser();
  const [value, setValue] = React.useState<string>('');
  const onChangeValue = (e: any) => {
    setValue(e.target.value);
  };
  const arrFilter: FilterInput[] = [{ key: TypeKeyFilterUser.EMAIL, value: '' }];

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
    const limit = pagination.limit || TypePagination.DEFAULT_LIMIT;
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
    navigate('/user-management/detail/' + record.id);
  };
  const onNew = () => {
    navigate(CommonPath.USERS_MANAGEMENT_NEW);
  };
  const handleSearch = (value: string) => () => {
    const newFilter = arrFilter.map((i) => ({
      ...i,
      value: i.key === TypeKeyFilterUser.EMAIL ? value : '',
    }));
    filterPaginationUser(newFilter);
  };
  const onReset = () => {
    setValue('');
    filterPaginationUser([]);
  };
  return (
    <UserManagementLayout>
      <PageHeader title="" breadcrumb={{ routes }}></PageHeader>
      <TableHeader
        title="User Management"
        extra={
          <Button type="primary" icon={<PlusOutlined />} onClick={onNew}>
            New User
          </Button>
        }
      >
        <FormSearch value={value} onChange={onChangeValue} handleSearch={handleSearch} onReset={onReset} />
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
