import React, { Children } from 'react';
import { DeleteOutlined, EditOutlined, EllipsisOutlined, DownOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { CommonPath } from 'commons/base-routes';
import { Table, Badge, Menu, Dropdown, Space } from 'antd';
import UserRowActions from 'commons/components/layouts/ActionTable';
import { Users } from 'graphql/generated/graphql';
interface IProps {
  items: any;
  rowKey: any;
  loading: boolean;
  onChange: () => void;
  handleAdd: () => void;
}
function TableMaterial(props: IProps) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [visible, setVisible] = React.useState(false);
  const { items, loading, onChange, rowKey, handleAdd } = props;
  const onEdit = (record: any) => () => {
    navigate(CommonPath.THEME_COLLECTION_UPDATE + record._id);
  };
  const onDelete = (record: any) => () => {
    setVisible(true);
  };
  const expandedRowRender = () => {
    const columns = [
        {
            title: 'Type Name', dataIndex: 'typeName', key: '#',
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
          { key: '2', typeName: 'Premium', code: '3545346633', price: '200,000 yen', order:'2'  },
    ];
    return <Table columns={columns} dataSource={data} pagination={false} />;
  };
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: true,
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      sorter: true,
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
      key: 'tools',
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
      children: [
        
          ]
      
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
        
        columns={columns}
        dataSource={data}
        loading={loading}
        rowKey={rowKey}
        onChange={onChange}
        expandable={{ expandedRowRender }}
      />
    </div>
  );
}

export default TableMaterial;
