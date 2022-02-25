import { PlusOutlined } from '@ant-design/icons';
import { Button, PageHeader, TablePaginationConfig, Row, Col } from 'antd';
import { SorterResult } from 'antd/lib/table/interface';
import { CommonPath } from 'commons/base-routes';
import TableHeader from 'commons/components/layouts/TableHeader';
import UserManagementLayout from 'commons/components/layouts/UserManagement';
import { TypeKeyFilterUser, TypePagination } from 'commons/type';
import { FilterInput, IUsersFields } from 'graphql/generated/graphql';
import { setTitle } from 'helpers/dom';
import { OrderOfSorter } from 'helpers/string';
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
  const [disabled, setDisabled] = React.useState<boolean>(false);
  const [status, setStatus] = React.useState<string>('');
  const arrFilter: FilterInput[] = [
    { key: TypeKeyFilterUser.EMAIL, value: '' },
    { key: TypeKeyFilterUser.ROLE, value: '' },
  ];

  React.useEffect(() => {
    filterUser([]);
    setTitle('ユーザー管理');
  }, []);

  React.useEffect(() => {
    if (role || status || value) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [role, status, value]);

  const onChangeValue = (e: any) => {
    setValue(e.target.value);
  };
  const onRoleChange = (value: any) => {
    setRole(value);
  };
  const onStatusChange = (value: any) => {
    setStatus(value);
  };

  const routes = [
    {
      path: CommonPath.DEFAULT_PATH,
      breadcrumbName: 'Home',
    },
    {
      path: CommonPath.USERS_MANAGEMENT,
      breadcrumbName: 'ユーザー管理',
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
  const handleSearch = () => {
    const newFilter = arrFilter.map((i) => ({
      ...i,
      value: i.key === TypeKeyFilterUser.EMAIL ? value : i.key === TypeKeyFilterUser.ROLE ? role : '',
    }));
    filterUser(newFilter);
  };
  const onReset = () => {
    setValue('');
    setDisabled(true);
    filterUser([]);
  };
  return (
    <UserManagementLayout>
      <PageHeader title="" breadcrumb={{ routes }} />
      <TableHeader
        title="ユーザー管理"
        extra={
          <Button type="primary" icon={<PlusOutlined />} onClick={onNew}>
            ユーザ
          </Button>
        }
      >
        <Row justify="center">
          <Col span={23}>
            <FilterForm
              role={role}
              disabled={disabled}
              status={status}
              value={value}
              onRoleChange={onRoleChange}
              onStatusChange={onStatusChange}
              onChange={onChangeValue}
              handleSearch={handleSearch}
              onReset={onReset}
            />
          </Col>
          <Col span={23}>
            <CustomUserManagementTable
              onDelete={onDelete}
              onEdit={onEdit}
              items={dataUsers}
              loading={loading}
              pagination={paginationTable}
              onChange={onChange}
            />
          </Col>
        </Row>
      </TableHeader>
    </UserManagementLayout>
  );
}

export default ListUserManagement;
