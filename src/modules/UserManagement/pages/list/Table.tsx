import { Table } from 'antd';
import { ColumnsType, TablePaginationConfig } from 'antd/lib/table';
import UserRowActions from 'commons/components/layouts/ActionTable';
import { IUsersFields, Role } from 'graphql/generated/graphql';
import React from 'react';
interface IProps {
  items: IUsersFields[];
  loading: boolean;
  onChange: (pagination: TablePaginationConfig) => void;
  pagination: any;
  onEdit: (record: IUsersFields) => () => void;
  onDelete: (record: IUsersFields) => () => void;
}
function CustomUserManagementTable(props: IProps) {
  const { items, loading, onChange, pagination } = props;
  const rowKey = (item: IUsersFields) => `${item.id}`;

  const columns: ColumnsType<IUsersFields> = [
    {
      title: 'STT',
      dataIndex: '#',
      key: '#',
      width: 40,
      render: (_, __, index) => <>{index + 1}</>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: '#',
      sorter: true,
    },
    {
      title: 'First Name',
      dataIndex: 'firstName',
      key: '#',
      sorter: true,
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: '#',
      sorter: true,
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: '#',
      sorter: true,
    },
    {
      title: 'Tools',
      dataIndex: '',
      key: '#',
      render: (_: any, record: IUsersFields) => (
        <UserRowActions
          title="Are you sure you want to delete this user?"
          record={record}
          onDelete={props.onDelete}
          onEdit={props.onEdit}
        />
      ),
    },
  ];
  return (
    <div>
      <Table
        columns={columns}
        dataSource={items}
        loading={loading}
        rowKey={rowKey}
        onChange={onChange}
        pagination={{
          ...pagination,
          showSizeChanger: false,
        }}
      />
    </div>
  );
}

export default CustomUserManagementTable;
