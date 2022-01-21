import { Table, TablePaginationConfig } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import UserRowActions from 'commons/components/layouts/ActionTable';
import { IMaterial, MaterialType } from 'graphql/generated/graphql';
import React from 'react';
import { useNavigate } from 'react-router';
interface IProps {
  items: IMaterial[];
  loading: boolean;
  onChange: (pagination: TablePaginationConfig, __: any, sorter: any) => void;
  pagination: any;
  onEdit: (record: IMaterial) => () => void;
  onDelete: (record: IMaterial) => () => void;
}
function TableMaterial(props: IProps) {
  const navigate = useNavigate();
  const { items, loading, onChange } = props;
  const rowKey = (item: IMaterial) => `${item.id}`;

  const expandedRowRender = (data: IMaterial) => {
    const columns: ColumnsType<MaterialType> = [
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
      { title: 'Order', dataIndex: 'order', key: '#' },
    ];
    return <Table columns={columns} dataSource={data.materialTypes} pagination={false} />;
  };

  const columns: ColumnsType<IMaterial> = [
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
      sorter: true,
      render: (_: any, record) => <>{record.title}</>,
    },
    {
      title: 'Order',
      dataIndex: 'order',
      key: 'order',
      sorter: true,
    },
    {
      title: 'Design',
      dataIndex: 'design',
      key: 'design',
      sorter: true,
      render: (_: any, record) => <>{record.title}</>,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      sorter: true,
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
