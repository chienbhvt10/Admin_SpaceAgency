import { Table, TablePaginationConfig } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import UserRowActions from 'commons/components/layouts/ActionTable';
import { IMaterial, MaterialType } from 'graphql/generated/graphql';
import { formatToDate, NumberOfRow } from 'helpers/string';
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
        title: 'Type Name',
        dataIndex: 'title',
        key: '#',
      },
      { title: 'Code', dataIndex: 'code3d', key: '#' },
      {
        title: 'Price',
        key: '#',
        dataIndex: 'price',
        render: (_: any, record) => <>{record.price?.value}</>,
      },
      // { title: 'Code', dataIndex: 'code3d', key: '#' },
    ];
    return <Table columns={columnsType} dataSource={data.materialTypes || []} pagination={false} />;
  };

  const columns: ColumnsType<IMaterial> = [
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
      sorter: true,
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      sorter: false,
      render: (_: any, record) => <>{record.title}</>,
    },
    {
      title: 'Create At',
      dataIndex: 'status',
      key: 'createdAt',
      sorter: false,
      render: (t: string) => <>{formatToDate(t)}</>,
    },
    {
      title: 'Design',
      dataIndex: 'design',
      key: 'design',
      sorter: false,
      render: (_: any, record) => <>{record.style?.title}</>,
    },
    {
      title: 'Tools',
      dataIndex: '',
      key: '#',

      render: (_: any, record: any) => (
        <UserRowActions
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
