import { Table } from 'antd';
import { ColumnsType, TablePaginationConfig } from 'antd/lib/table';
import { IStyle } from 'graphql/generated/graphql';
import { formatPriceJapan, NumberOfRow } from 'helpers/string';
import TableRowAction from 'modules/StylesCollection/components/Table-action';
import React from 'react';
interface IProps {
  items: IStyle[];
  loading: boolean;
  onChange: (pagination: TablePaginationConfig, __: any, sorter: any) => void;
  pagination: any;
  onEdit: (record: IStyle) => () => void;
  onDelete: (record: IStyle) => () => void;
}
const StyleCollectionTable = (props: IProps) => {
  const { items, loading, onChange, pagination, onDelete, onEdit } = props;
  const { current, pageSize } = pagination;
  const rowKey = (item: IStyle) => `${item.id}`;

  const columns: ColumnsType<IStyle> = [
    {
      title: 'No',
      dataIndex: '#',
      key: '#',
      width: 40,
      render: (_, __, index) => <>{NumberOfRow(index, current, pageSize)}</>,
    },
    {
      title: '名称',
      dataIndex: 'title',
      key: 'title',
      sortDirections: ['descend', 'ascend'],
      sorter: true,
    },
    {
      title: 'テーマ',
      dataIndex: 'theme',
      key: 'theme',
      sortDirections: ['descend', 'ascend'],
      sorter: false,
      render: (_, record) => <>{record.theme?.title}</>,
    },
    {
      title: '3Dコード',
      dataIndex: 'code3d',
      key: 'code3d',
      sortDirections: ['descend', 'ascend'],
      sorter: true,
    },
    {
      title: '価格',
      dataIndex: 'price',
      sortDirections: ['descend', 'ascend'],
      key: 'price',
      sorter: false,
      render: (_, record) => <>{formatPriceJapan(record.price?.value || 0)}</>,
    },
    {
      title: '編集',
      dataIndex: '',
      key: '#',
      width: 40,
      render: (_, record) => (
        <TableRowAction
          onDelete={onDelete}
          onEdit={onEdit}
          record={record}
          title="Are you sure to delete this style?"
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

export default StyleCollectionTable;
