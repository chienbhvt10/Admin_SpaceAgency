import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row, Select, Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { CommonPath } from 'commons/base-routes';
import TableHeader from 'commons/components/layouts/TableHeader';
import FilterForm from 'modules/StylesCollection/components/FilterForm';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { Style } from 'helpers/temp-type';
import TableRowAction from 'modules/StylesCollection/components/table-row-action';
import { styleTableColumns } from 'helpers/table-columns';

const { Option } = Select;
const themeOptions: any = [];
for (let i = 0; i < 10; i++) {
  themeOptions.push(<Option key={i.toString(36) + i}>Theme {i}</Option>);
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

  const columns: ColumnsType<Style> = [
    ...styleTableColumns,
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
          Style
        </Button>
      }
    >
      <Row justify="center">
        <Col span={22}>
          <FilterForm />
        </Col>
        <Col span={22}>
          <Table columns={columns} dataSource={items} loading={loading} rowKey={rowKey} onChange={onChange} />
        </Col>
      </Row>
    </TableHeader>
  );
};

export default StyleCollectionTable;
