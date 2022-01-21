import { PlusOutlined } from '@ant-design/icons';
import { Button, PageHeader, TablePaginationConfig } from 'antd';
import { SorterResult } from 'antd/lib/table/interface';
import { CommonPath } from 'commons/base-routes';
import { FormSearch } from 'commons/components/layouts/FormSearch';
import TableHeader from 'commons/components/layouts/TableHeader';
import UserManagementLayout from 'commons/components/layouts/UserManagement';
import { TypeKeyFilterUser, TypePagination, TypeSortUser } from 'commons/type';
import { FilterInput, IUsersFields } from 'graphql/generated/graphql';
import { setTitle } from 'helpers/dom';
import { isEmpty, OrderOfSorter } from 'helpers/string';
import FilterForm from 'modules/UserManagement/components/FilterForm';
import { useListUsers } from 'modules/UserManagement/hooks/useListUsers';
import { useRemoveUser } from 'modules/UserManagement/hooks/useRemoveUser';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomUserManagementTable from './Table';

function ListUserManagement() {
  const { dataUsers, loading, paginationTable, updatePaginationAndSorterUser, pagination, filterUser } = useListUsers();
  const navigate = useNavigate();
  const { removeUser } = useRemoveUser();
  const [value, setValue] = React.useState<string>('');
  const [role, setRole] = React.useState<string>('');
  const [status, setStatus] = React.useState<string>('');
  React.useEffect(() => {
    setTitle('User Management');
  }, []);

  const onChangeValue = (e: any) => {
    setValue(e.target.value);
  };
  const onRoleChange = (value: any) => {
    setRole(value);
  };
  const onStatusChange = (value: any) => {
    setStatus(value);
  };
  const arrFilter: FilterInput[] = [
    { key: TypeKeyFilterUser.EMAIL, value: '' },
    { key: TypeKeyFilterUser.ROLE, value: '' },
    { key: TypeKeyFilterUser.STATUS, value: '' },
  ];

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
  const onChange = (paginationTable: TablePaginationConfig, _: any, sorter: SorterResult<any>) => {
    const order = OrderOfSorter(sorter.order);
    const limit = pagination.limit || TypePagination.DEFAULT_LIMIT;
    const current = paginationTable.current || 1;
    const skip = (current - 1) * limit;
    updatePaginationAndSorterUser(
      {
        skip,
        limit,
      },
      {
        key: sorter.columnKey?.toString() || '',
        value: order,
      },
    );
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
    const newFilter = arrFilter.map((filter) => {
      switch (filter.key) {
        case TypeKeyFilterUser.EMAIL:
          return {
            ...filter,
            value: value,
          };
        case TypeKeyFilterUser.ROLE:
          return {
            ...filter,
            value: role,
          };
        case TypeKeyFilterUser.STATUS:
          return {
            ...filter,
            value: status,
          };
        default:
          return { ...filter };
      }
    });
    filterUser(newFilter);
  };
  const onReset = () => {
    setValue('');
    filterUser([]);
  };
  return (
    <UserManagementLayout>
      <PageHeader title="" breadcrumb={{ routes }} />
      <TableHeader
        title="User Management"
        extra={
          <Button type="primary" icon={<PlusOutlined />} onClick={onNew}>
            New User
          </Button>
        }
      >
        <FilterForm
          role={role}
          status={status}
          value={value}
          onRoleChange={onRoleChange}
          onStatusChange={onStatusChange}
          onChange={onChangeValue}
          handleSearch={handleSearch}
          onReset={onReset}
        />
        <CustomUserManagementTable
          onDelete={onDelete}
          onEdit={onEdit}
          items={dataUsers}
          loading={loading}
          pagination={paginationTable}
          onChange={onChange}
        />
      </TableHeader>
    </UserManagementLayout>
  );
}

export default ListUserManagement;
