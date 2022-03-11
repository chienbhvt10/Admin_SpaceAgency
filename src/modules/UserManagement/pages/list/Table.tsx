import { Table } from 'antd';
import { ColumnsType, TablePaginationConfig } from 'antd/lib/table';
import { SorterResult } from 'antd/lib/table/interface';
import Text from 'antd/lib/typography/Text';
import UserRowActions from 'commons/components/layouts/ActionTable';
import { TypeRole } from 'commons/type';
import { IUsersFields, Role } from 'graphql/generated/graphql';
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
      title: 'No',
      dataIndex: '#',
      key: '#',
      width: 60,
      render: (_, __, index) => <>{NumberOfRow(index, current, pageSize)}</>,
    },
    {
      title: 'Eメール',
      dataIndex: 'email',
      key: 'email',
      sortDirections: ['descend', 'ascend'],
      sorter: true,
      width: 300,
    },
    {
      title: '氏名',
      dataIndex: 'fullName',
      key: 'fullName',
      sorter: false,
      width: 300,
      render: (_, record: IUsersFields, __) => <Text>{record.firstName + ' ' + record.lastName}</Text>,
    },
    {
      title: '電話番号',
      dataIndex: 'phone',
      key: 'phone',
      sorter: false,
      width: 120,
    },
    {
      title: 'ロール',
      dataIndex: 'role',
      key: 'role',
      sorter: false,
      width: 120,
    },
    // {
    //   title: '状態',
    //   dataIndex: 'status',
    //   key: 'status',
    //   sorter: false,
    //   width: 120,
    // },
    {
      title: 'ツール',
      dataIndex: '',
      key: 'Action',
      width: 120,
      render: (_: any, record: IUsersFields) => (
        <>
          {record.role !== Role.Admin ? (
            <TableRowAction
              title="このユーザーを削除します。よろしいですか。"
              record={record}
              onDelete={props.onDelete}
              onEdit={props.onEdit}
            />
          ) : (
            ''
          )}
        </>
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
        locale={{
          emptyText: 'データがありません',
        }}
      />
    </div>
  );
}

export default CustomUserManagementTable;
