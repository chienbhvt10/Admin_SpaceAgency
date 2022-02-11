import { Table } from 'antd';
import { ColumnsType, TablePaginationConfig } from 'antd/lib/table';
import { SorterResult } from 'antd/lib/table/interface';
import Text from 'antd/lib/typography/Text';
import UserRowActions from 'commons/components/layouts/ActionTable';
import { IUsersFields } from 'graphql/generated/graphql';
import { NumberOfRow } from 'helpers/string';
import { useListUsers } from 'modules/UserManagement/hooks/useListUsers';
import React from 'react';
interface IProps {
  items: IUsersFields[];
  loading: boolean;
  onChange: (pagination: TablePaginationConfig, __: any, sorter: any) => void;
  pagination: any;
  onEdit: (record: IUsersFields) => () => void;
  onDelete: (record: IUsersFields) => () => void;
}
function CustomUserManagementTable(props: IProps) {
  const { items, loading, onChange, pagination } = props;
  const { paginationTable } = useListUsers();
  const { current, pageSize } = paginationTable;
  const rowKey = (item: IUsersFields) => `${item.id}`;

  const columns: ColumnsType<IUsersFields> = [
    {
      title: 'No',
      dataIndex: '#',
      key: '#',
      width: 40,
      render: (_, __, index) => <>{NumberOfRow(index, current, pageSize)}</>,
    },
    {
      title: '氏名',
      dataIndex: 'fullName',
      key: 'fullName',
      sorter: false,
      render: (_, record: IUsersFields, __) => <Text>{record.firstName + ' ' + record.lastName}</Text>,
    },
    {
      title: 'Eメール',
      dataIndex: 'email',
      key: 'email',
      sortDirections: ['descend', 'ascend'],
      sorter: true,
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
      sorter: false,
    },
    {
      title: 'Is Active',
      dataIndex: 'isActive',
      key: 'isActive',
      sorter: false,
    },
    {
      title: '編集',
      dataIndex: '',
      key: 'Action',
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
        bordered
        pagination={{
          ...pagination,
          showSizeChanger: false,
        }}
      />
    </div>
  );
}

export default CustomUserManagementTable;
