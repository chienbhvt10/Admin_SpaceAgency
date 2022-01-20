import { Table, TablePaginationConfig } from 'antd';
import { CommonPath } from 'commons/base-routes';
import UserRowActions from 'commons/components/layouts/ActionTable';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { IMaterial } from 'graphql/generated/graphql';
import { ColumnsType } from 'antd/lib/table';
interface IProps {
  items: IMaterial[];
  loading: boolean;
  onChange: (pagination: TablePaginationConfig, __: any, sorter: any) => void;
  pagination: any;
  onEdit: (record: IMaterial) => () => void;
  onDelete: (record: IMaterial) => () => void;
}
function TableMaterial(props: IProps) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [visible, setVisible] = React.useState(false);
  const { items, loading, onChange } = props;
  const rowKey = (item: IMaterial) => `${item.id}`;

  const onEdit = (record: any) => () => {
    navigate(CommonPath.MATERIAL_COLLECTION_UPDATE + record._id);
  };
  const onDelete = (record: any) => () => {
    setVisible(true);
  };
  const expandedRowRender = () => {
    const columns = [
      {
        title: 'Type Name',
        dataIndex: 'typeName',
        key: '#',
      },
      { title: 'Code', dataIndex: 'code', key: '#' },
      {
        title: 'Price',
        key: '#',
        dataIndex: 'price',
      },
      { title: 'Order', dataIndex: 'order', key: '#' },
    ];

    const data = [
      { key: '1', typeName: 'Standard', code: '0347833454', price: '0 yen', order: '1' },
      { key: '2', typeName: 'Premium', code: '3545346633', price: '200,000 yen', order: '2' },
    ];
    return <Table columns={columns} dataSource={data} pagination={false} />;
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
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ),
    },
  ];
  const data = [
    {
      key: '1',
      name: 'Living Room',
      description: 'Room meeting',
      order: '1',
      design: 'Hotel Design',
      status: 'Active',
      children: [],
    },
    {
      key: '2',
      name: 'Kitchen Room',
      description: 'Room cooking',
      order: '1',
      design: 'Cafe Design',
      status: 'Active',
    },
    {
      key: '3',
      name: 'Bed Room',
      description: 'Room sleeping',
      order: '1',
      design: 'Free Design',
      status: 'Active',
    },
  ];
  return (
    <div>
      <Table
        expandable={{ expandedRowRender, expandRowByClick: true }}
        columns={columns}
        pagination={{
          ...props.pagination,
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
