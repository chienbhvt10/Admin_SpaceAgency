import { TablePaginationConfig, Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { TypeKeyFilterDocument } from 'commons/type';
import { FilterInput, IDocumentRequest } from 'graphql/generated/graphql';
import { NumberOfRow } from 'helpers/string';
import DocumentTableRowAction from 'modules/DocumentRequest/components/table-row-action';
import React from 'react';

type IProps = {
  items: IDocumentRequest[];
  loading: boolean;
  onChange: (pagination: TablePaginationConfig, __: any, sorter: any) => void;
  pagination: any;
  onEdit?: (record: IDocumentRequest) => () => void;
  onDelete?: (record: IDocumentRequest) => () => void;
};

const DocumentTable = (props: IProps) => {
  const { items, loading, onChange, onDelete, onEdit, pagination } = props;
  const { current, pageSize } = pagination;
  const rowKey = (item: IDocumentRequest) => `${item.id}`;

  const columns: ColumnsType<IDocumentRequest> = [
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
      dataIndex: 'tel',
      key: 'tel',
      sortDirections: ['descend', 'ascend'],
      sorter: true,
      width: 100,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      sorter: false,
      width: 100,
    },
    {
      title: 'ContactMethod',
      dataIndex: 'desiredContactMethod',
      key: 'desiredContactMethod',
      sorter: false,
      width: 100,
    },
    {
      title: 'DeploymentTime',
      dataIndex: 'desiredDeploymentTime',
      key: 'desiredDeploymentTime',
      sorter: false,
      width: 100,
    },
    {
      title: '編集',
      dataIndex: '',
      key: '#',
      width: 120,
      render: (_, record) => (
        <DocumentTableRowAction
          onDelete={onDelete}
          onEdit={onEdit}
          record={record}
          title="Are you sure to delete this Document?"
        />
      ),
    },
  ];
  return (
    <Table
      columns={columns}
      dataSource={items}
      loading={loading}
      rowKey={rowKey}
      onChange={onChange}
      bordered
      pagination={{
        ...pagination,
      }}
    />
  );
};

export default DocumentTable;
