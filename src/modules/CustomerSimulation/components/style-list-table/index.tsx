import { Col, Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import React from 'react';

interface Props {
  colOffSet: string | number;
}

const dataSource = [
  { name: 'name', type: 'type', price: 12 },
  { name: 'name', type: 'type', price: 12 },
  { name: 'name', type: 'type', price: 12 },
  { name: 'name', type: 'type', price: 12 },
  { name: 'name', type: 'type', price: 12 },
];
const StyleListTable = (props: Props) => {
  const { colOffSet } = props;
  const columns: ColumnsType<any> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: '#',
      width: 40,
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: '#',
      width: 40,
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: '#',
      width: 40,
    },
  ];
  return (
    <Col offset={colOffSet}>
      <Table dataSource={dataSource} columns={columns} bordered pagination={false} />
    </Col>
  );
};

export default StyleListTable;
