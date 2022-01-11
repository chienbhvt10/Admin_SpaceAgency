import { Table } from 'antd';
import { CommonPath } from 'commons/base-routes';
import UserRowActions from 'commons/components/layouts/ActionTable';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
interface IProps {
  items: any;
  rowKey: any;
  loading: boolean;
  onChange: () => void;
  handleAdd: () => void;
}
function TableThemes(props: IProps) {
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
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: '#',
      sorter: true,
    },
    {
      title: 'Name English',
      dataIndex: 'nameenglish',
      key: '#',
      sorter: true,
    },
    {
      title: '3D Code',
      dataIndex: 'dcode',
      key: '#',
      sorter: true,
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: '#',
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
      name: 'PACO-minimal',
      nameenglish: 'Paco-minimal',
      dcode: '03874233554',
      price: '6,500,000 yen',
    },
    {
      key: '2',
      name: 'PACO-minimal',
      nameenglish: 'Paco-minimal',
      dcode: '03874233554',
      price: '6,500,000 yen',
    },
  ];
  return (
    <div>
      <Table columns={columns} dataSource={data} loading={loading} rowKey={rowKey} onChange={onChange} />
    </div>
  );
}

export default TableThemes;
