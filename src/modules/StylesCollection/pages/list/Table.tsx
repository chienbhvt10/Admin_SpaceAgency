import { Table } from 'antd';
import { ColumnsType, TablePaginationConfig } from 'antd/lib/table';
import { IStyle } from 'graphql/generated/graphql';
import { formatPriceJapan, NumberOfRowDesc } from 'helpers/string';
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
  const { current, pageSize, total } = pagination;
  const rowKey = (item: IStyle) => `${item.id}`;

  const columns: ColumnsType<IStyle> = [
    {
      title: 'No',
      dataIndex: '#',
      key: '#',
      width: 60,
      render: (_, __, index) => <>{NumberOfRowDesc(index, current, total, pageSize)}</>,
    },
    {
      title: 'タイトル',
      dataIndex: 'title',
      key: 'title',
      sortDirections: ['descend', 'ascend'],
      sorter: true,
      width: 200,
    },
    {
      title: 'タイプ',
      dataIndex: 'theme',
      key: 'theme',
      sortDirections: ['descend', 'ascend'],
      sorter: false,
      width: 200,
      render: (_, record) => <>{record.theme?.title}</>,
    },
    {
      title: '3Dコード',
      dataIndex: 'code3d',
      key: 'code3d',
      sortDirections: ['descend', 'ascend'],
      sorter: true,
      width: 150,
    },
    {
      title: '価格',
      dataIndex: 'price',
      sortDirections: ['descend', 'ascend'],
      key: 'price',
      sorter: false,
      width: 150,
      render: (_, record) => <>{formatPriceJapan(record.price?.value || 0)}</>,
    },
    {
      title: 'ツール',
      dataIndex: '',
      key: '#',
      width: 120,
      render: (_, record) => (
        <TableRowAction
          onDelete={onDelete}
          onEdit={onEdit}
          record={record}
          title="このデザインを削除します。よろしいですか。"
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
      locale={{
        emptyText: 'データがありません',
      }}
    />
  );
};

export default StyleCollectionTable;
