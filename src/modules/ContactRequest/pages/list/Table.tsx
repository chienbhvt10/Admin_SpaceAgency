import { Table } from 'antd';
import { ColumnsType, TablePaginationConfig } from 'antd/lib/table';
import UserRowActions from 'commons/components/layouts/ActionTable';
import { IRequest } from 'graphql/generated/graphql';
import { NumberOfRow } from 'helpers/string';
import React from 'react';
interface IProps {
  items: IRequest[];
  loading: boolean;
  onChange: (pagination: TablePaginationConfig, __: any, sorter: any) => void;
  pagination: any;
  onEdit: (record: IRequest) => () => void;
  onDelete: (record: IRequest) => () => void;
}
function ContactRequestTable(props: IProps) {
  const { items, loading, onChange, pagination } = props;
  const { current, pageSize } = pagination;
  const rowKey = (item: IRequest) => `${item.id}`;

  const columns: ColumnsType<IRequest> = [
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
      sorter: true,
      sortDirections: ['descend', 'ascend'],
      width: 200,
    },
    {
      title: '氏名',
      dataIndex: 'requesterFullName',
      key: 'requesterFullName',
      sorter: true,
      sortDirections: ['descend', 'ascend'],
      width: 200,
    },
    {
      title: '電話番号',
      dataIndex: 'phone',
      key: 'phone',
      sortDirections: ['descend', 'ascend'],
      sorter: true,
      width: 100,
    },
    {
      title: 'タイプ',
      dataIndex: 'type',
      key: 'type',
      sorter: false,
      width: 100,
    },
    {
      title: '郵便番号',
      dataIndex: 'postcode',
      key: 'postcode',
      sorter: false,
      width: 100,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      sorter: false,
      width: 60,
    },
    {
      title: 'ツール',
      dataIndex: '',
      key: 'Action',
      width: 100,
      render: (_: any, record: IRequest) => (
        <UserRowActions
          title="Are you sure you want to delete this request?"
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

export default ContactRequestTable;
