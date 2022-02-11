import { Col, Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { Quotation } from 'graphql/generated/graphql';
import React from 'react';

interface Props {
  colOffSet: string | number;
  dataSource?: Quotation[];
}

const StyleListTable = (props: Props) => {
  const { colOffSet, dataSource } = props;
  const columns: ColumnsType<any> = [
    {
      title: '名称',
      dataIndex: 'name',
      key: '#',
      width: 40,
    },
    {
      title: 'タイプ',
      dataIndex: 'type',
      key: '#',
      width: 40,
    },
    {
      title: '価格',
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
