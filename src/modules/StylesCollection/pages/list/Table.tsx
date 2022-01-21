import { Table } from 'antd';
import { ColumnsType, TablePaginationConfig } from 'antd/lib/table';
import { IStyle } from 'graphql/generated/graphql';
import { NumberOfRow } from 'helpers/string';
import TableRowAction from 'modules/StylesCollection/components/table-row-action';
import { useListStyles } from 'modules/StylesCollection/hooks/useListStyle';
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
  const { paginationTable } = useListStyles();
  const { current, pageSize } = paginationTable;
  const rowKey = (item: IStyle) => `${item.id}`;

  const columns: ColumnsType<IStyle> = [
    {
      title: 'STT',
      dataIndex: '#',
      key: '#',
      width: 40,
      render: (_, __, index) => <>{NumberOfRow(index, current, pageSize)}</>,
    },
    {
      title: 'Name',
      dataIndex: 'title',
      key: 'title',
      sortDirections: ['descend', 'ascend'],
      sorter: true,
    },
    {
      title: 'Theme',
      dataIndex: 'theme',
      key: 'theme',
      sortDirections: ['descend', 'ascend'],
      sorter: true,
      render: (_, record) => <>{record.theme?.title}</>,
    },
    {
      title: 'Order',
      dataIndex: 'order',
      key: 'order',
      sortDirections: ['descend', 'ascend'],
      sorter: true,
    },
    {
      title: '3D Code',
      dataIndex: 'code3d',
      key: 'code3d',
      sortDirections: ['descend', 'ascend'],
      sorter: true,
    },
    {
      title: 'Price',
      dataIndex: 'price',
      sortDirections: ['descend', 'ascend'],
      key: 'price',
      sorter: true,
      render: (_, record) => <>{record.price?.value}</>,
    },
    {
      title: 'Tool',
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
