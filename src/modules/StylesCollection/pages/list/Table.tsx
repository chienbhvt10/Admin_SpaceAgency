import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row, Select, Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { CommonPath } from 'commons/base-routes';
import TableHeader from 'commons/components/layouts/TableHeader';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { Style } from '../type';
import TableRowAction from './table-row-action';

const { Option } = Select;
const themeOptions: any = [];
for (let i = 0; i < 10; i++) {
  themeOptions.push(<Option key={i.toString(36) + i}>Theme {i}</Option>);
}
const dataSource: Style[] = [];

for (let i = 0; i < 1; i++) {
  dataSource.push({
    code: 'code ' + i.toString(),
    name: 'name ' + i.toString(),
    order: i,
    price: i,
    theme: 'theme ' + i.toString(),
  });
}

interface IProps {
  items: any;
  rowKey: any;
  loading: boolean;
  onChange: () => void;
  handleAdd: () => void;
}
const requireRule = { required: true, message: 'This is required information!' };
const StyleCollectionTable = (props: IProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { handleAdd, items, loading, onChange, rowKey } = props;
  const onEdit = (record: any) => () => {
    navigate(CommonPath.STYLES_COLLECTION_DETAIL + record._id);
  };
  const onDelete = (record: any) => () => {
    // deleteAction
  };

  const columns: ColumnsType<object> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: '#',
      width: 40,
      sorter: true,
    },
    {
      title: 'Theme',
      dataIndex: 'theme',
      key: '#',
      width: 40,
      sorter: true,
    },
    {
      title: 'Order',
      dataIndex: 'order',
      key: '#',
      width: 40,
      sorter: true,
    },
    {
      title: '3D Code',
      dataIndex: 'code',
      key: '#',
      width: 40,
      sorter: true,
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: '#',
      width: 40,
      sorter: true,
    },
    {
      title: 'Tool',
      dataIndex: '',
      key: '#',
      width: 40,
      sorter: true,
      render: (_, record) => (
        <TableRowAction
          onDelete={onDelete}
          onEdit={onEdit}
          record={record}
          title="Are you sure to delete this style?"
          key={rowKey}
        />
      ),
    },
  ];
  return (
    <TableHeader
      title="Style list"
      extra={
        <Button type="primary" icon={<PlusOutlined />} onClick={handleAdd}>
          New Style
        </Button>
      }
    >
      <Form className="filter-form">
        <Row style={{ margin: '30px 0 0 30px' }}>
          <Col span={10}>
            <Form.Item label="Theme" name="theme" rules={[requireRule]}>
              <Select placeholder="---All---">{themeOptions}</Select>
            </Form.Item>
          </Col>
          <Col span={18}>
            <Form.Item label="Keyword" name="keyword">
              <Input />
            </Form.Item>
          </Col>
          <Col style={{ marginLeft: '10px' }} span={2}>
            <Button type="dashed">Reset</Button>
          </Col>
          <Col style={{ marginLeft: '10px' }} span={2}>
            <Button type="primary">Search</Button>
          </Col>
        </Row>
      </Form>
      <Table columns={columns} dataSource={dataSource} loading={loading} rowKey={rowKey} onChange={onChange} />
    </TableHeader>
  );
};

export default StyleCollectionTable;
