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
      title: 'STT',
      dataIndex: '#',
      key: '#',
      width: 40,
      render: (_, __, index) => <>{NumberOfRow(index, current, pageSize)}</>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      sorter: true,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'FullName',
      dataIndex: 'requesterFullName',
      key: 'requesterFullName',
      sorter: true,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
      sortDirections: ['descend', 'ascend'],
      sorter: true,
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      sorter: false,
    },
    {
      title: 'Post Code',
      dataIndex: 'postcode',
      key: 'postcode',
      sorter: false,
    },
    {
      title: 'Tools',
      dataIndex: '',
      key: 'Action',
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
