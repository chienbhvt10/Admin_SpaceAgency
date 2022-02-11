import { Table, TablePaginationConfig } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import UserRowActions from 'commons/components/layouts/ActionTable';
import { IMaterial, MaterialType } from 'graphql/generated/graphql';
import { formatPriceJapan, formatToDate, NumberOfRow } from 'helpers/string';
import React from 'react';
interface IProps {
  items: IMaterial[];
  loading: boolean;
  onChange: (pagination: TablePaginationConfig, __: any, sorter: any) => void;
  pagination: any;
  onEdit: (record: IMaterial) => () => void;
  onDelete: (record: IMaterial) => () => void;
}
function TableMaterial(props: IProps) {
  const { items, loading, onChange, pagination } = props;
  const rowKey = (item: IMaterial) => `${item.id}`;
  const { current, pageSize } = pagination;

  const expandedRowRender = (data: IMaterial) => {
    const columnsType: ColumnsType<MaterialType> = [
      {
        title: 'タイプ',
        dataIndex: 'title',
        key: '#',
      },
      { title: 'コード', dataIndex: 'code3d', key: '#' },
      {
        title: '価格',
        key: '#',
        dataIndex: 'price',
        render: (_: any, record) => <>{formatPriceJapan(record.price?.value || 0)}</>,
      },
    ];
    return <Table columns={columnsType} dataSource={data.materialTypes || []} pagination={false} />;
  };

  const columns: ColumnsType<IMaterial> = [
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
      sorter: true,
    },
    {
      title: '詳細',
      dataIndex: 'description',
      key: 'description',
      sorter: false,
      render: (_: any, record) => <>{record.title}</>,
    },
    {
      title: '作成日',
      dataIndex: 'status',
      key: 'createdAt',
      sorter: false,
      render: (t: string) => <>{formatToDate(t)}</>,
    },
    {
      title: 'デザイン',
      dataIndex: 'design',
      key: 'design',
      sorter: false,
      render: (_: any, record) => <>{record.style?.title}</>,
    },
    {
      title: '編集',
      dataIndex: '',
      key: '#',

      render: (_: any, record: any) => (
        <UserRowActions
          title="Are you sure you want to delete this material?"
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
        expandable={{ expandedRowRender, expandRowByClick: true }}
        columns={columns}
        pagination={{
          ...props.pagination,
          showSizeChanger: false,
        }}
        dataSource={items}
        loading={loading}
        rowKey={rowKey}
        onChange={onChange}
        bordered
      />
    </div>
  );
}

export default TableMaterial;
