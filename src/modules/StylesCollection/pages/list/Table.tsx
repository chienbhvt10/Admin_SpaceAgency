import { Select, Table, TablePaginationConfig } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { IStyle } from 'graphql/generated/graphql';
import { NumberOfRow } from 'helpers/string';
import TableRowAction from 'modules/StylesCollection/components/table-row-action';
import useListStyles from 'modules/StylesCollection/hooks/useListStyles';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

interface IProps {
  items: IStyle[];
  loading: boolean;
  pagination: any;
  onChange: (pagination: TablePaginationConfig, __: any, sorter: any) => void;
  onEdit: (record: IStyle) => () => void;
  onDelete: (record: IStyle) => () => void;
}
const StyleCollectionTable = (props: IProps) => {
  const { items, loading, onChange, onDelete, onEdit, pagination } = props;
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
      dataIndex: 'name',
      key: 'name',
      width: 40,
      sortDirections: ['descend', 'ascend'],
      sorter: true,
    },
    {
      title: 'Theme',
      dataIndex: 'theme',
      key: 'theme',
      width: 40,
      sorter: false,
    },
    {
      title: 'Order',
      dataIndex: 'order',
      key: 'order',
      width: 40,
      sorter: false,
    },
    {
      title: '3D Code',
      dataIndex: 'code3d',
      key: 'code3d',
      width: 40,
      sorter: false,
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      width: 40,
      sorter: false,
    },
    {
      title: 'Tool',
      dataIndex: '',
      key: 'Action',
      width: 40,
      sorter: false,
      render: (_: any, record: IStyle) => (
        <TableRowAction
          onDelete={onDelete}
          onEdit={onEdit}
          record={record}
          title="Are you sure you want to delete this style?"
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
      pagination={{
        ...pagination,
        showSizeChanger: false,
      }}
    />
  );
};

export default StyleCollectionTable;
