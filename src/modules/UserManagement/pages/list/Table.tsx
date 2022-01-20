import { Table } from 'antd';
import { ColumnsType, TablePaginationConfig } from 'antd/lib/table';
import Text from 'antd/lib/typography/Text';
import { IUsersFields } from 'graphql/generated/graphql';
import { NumberOfRow } from 'helpers/string';
import TableRowAction from 'modules/UserManagement/components/table-row-action';
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
      title: 'STT',
      dataIndex: '#',
      key: '#',
      width: 40,
      render: (_, __, index) => <>{NumberOfRow(index, current, pageSize)}</>,
    },
    {
      title: 'Full Name',
      dataIndex: '',
      key: 'fullName',
      sorter: false,
      render: (_: any, record: IUsersFields, __: number) => <Text>{record.firstName + ' ' + record.lastName}</Text>,
    },
    {
      title: 'Email',
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
      title: 'Active',
      dataIndex: 'active',
      key: 'active',
      sorter: false,
    },
    {
      title: 'Tools',
      dataIndex: '',
      key: 'Action',
      render: (_: any, record: IUsersFields) => (
        <TableRowAction
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
