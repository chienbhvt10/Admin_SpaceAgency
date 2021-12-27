import { PlusOutlined } from '@ant-design/icons';
import { Button, Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { CommonPath } from 'commons/base-routes';
import UserRowActions from 'commons/components/layouts/ActionTable';
import TableHeader from 'commons/components/layouts/TableHeader';
import { Users } from 'graphql/generated/graphql';
import { deleteUser } from 'modules/User/redux/actions';
import moment from 'moment';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { getDetailUser } from '../../redux/actions/get-user';

interface IProps {
  items: Users[];
  loading: boolean;
  rowKey: any;
  onChange: () => void;
  handleAdd: () => void;
}
function TableUser(props: IProps) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { items, loading, onChange, rowKey, handleAdd } = props;

  const onDelete = (record: Users) => () => {
    dispatch(deleteUser(record._id));
  };

  const onEdit = (record: Users) => () => {
    navigate(CommonPath.USERS_PATH_DETAIL + record._id);
  };

  const columns: ColumnsType<Users> = [
    {
      title: 'STT',
      dataIndex: '#',
      key: '#',
      width: 40,
      render: (_, __, index) => <>{index + 1}</>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: '#',
      width: 40,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: '#',
      width: 40,
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: '#',
      width: 40,
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      key: '#',
      width: 40,
      render: (text: string) => moment(text).format('L'),
    },
    {
      title: 'Updated At',
      dataIndex: 'updatedAt',
      key: '#',
      width: 40,
      render: (text: string) => moment(text).format('L'),
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: '#',
      width: 40,
    },
    {
      title: 'Confirmed',
      dataIndex: 'confirmed',
      key: '#',
      width: 40,
      render: (status: boolean) => <>{!status ? 'CONFIRM' : 'UNCONFIRM'}</>,
    },
    {
      title: '',
      dataIndex: '',
      key: '#',
      width: 40,
      render: (_, record) => (
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
    <TableHeader
      title="User list"
      extra={
        <Button type="primary" icon={<PlusOutlined />} onClick={handleAdd}>
          New Users
        </Button>
      }
    >
      <Table
        columns={columns}
        dataSource={items}
        loading={loading}
        rowKey={rowKey}
        //   pagination={{
        //     ...pagination,
        //     showSizeChanger: true,
        //   }}
        onChange={onChange}
      />
    </TableHeader>
  );
}

export default TableUser;
