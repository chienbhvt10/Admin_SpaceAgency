import { Button, Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import TableHeader from 'commons/components/layouts/TableHeader';
import { Users } from 'graphql/generated/graphql';
import moment from 'moment';
import { PlusOutlined } from '@ant-design/icons';

interface IProps {
  items: Users[];
  loading: boolean;
  rowKey: any;
  onChange: () => void;
  handleAdd: () => void;
}
function TableUser(props: IProps) {
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
  ];
  const { items, loading, onChange, rowKey, handleAdd } = props;
  return (
    <TableHeader
      title="Danh sách bài viết"
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
