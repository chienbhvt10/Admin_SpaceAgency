import { Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { CommonPath } from 'commons/base-routes';
import UserRowActions from 'commons/components/layouts/ActionTable';
import { ITheme } from 'graphql/generated/graphql';
import React from 'react';
import { useNavigate } from 'react-router';
interface IProps {
  items: ITheme[];
  loading: boolean;
  onChange: () => void;
  handleAdd: () => void;
}
function TableThemes(props: IProps) {
  const navigate = useNavigate();
  const [visible, setVisible] = React.useState(false);
  const { items, loading, onChange, handleAdd } = props;
  const rowKey = (item: ITheme) => `${item.id}`;

  const onEdit = (record: any) => () => {
    navigate(CommonPath.THEME_COLLECTION_UPDATE + record._id);
  };
  const onDelete = (record: any) => () => {
    setVisible(true);
  };
  const columns: ColumnsType<ITheme> = [
    {
      title: 'Name',
      dataIndex: 'title',
      key: '#',
      sorter: true,
    },
    {
      title: 'Name English',
      dataIndex: 'description',
      key: '#',
      sorter: true,
    },
    {
      title: '3D Code',
      dataIndex: 'code3D',
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
  return (
    <div>
      <Table columns={columns} dataSource={items} loading={loading} rowKey={rowKey} onChange={onChange} />
    </div>
  );
}

export default TableThemes;
