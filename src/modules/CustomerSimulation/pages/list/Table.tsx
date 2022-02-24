import { Table } from 'antd';
import { ColumnsType, TablePaginationConfig } from 'antd/lib/table';
import { ISimulation, MaterialType } from 'graphql/generated/graphql';
import { NumberOfRow, totalPrice } from 'helpers/string';
import TableRowAction from 'modules/CustomerSimulation/components/table-row-action';
import React from 'react';

interface IProps {
  items: ISimulation[];
  loading: boolean;
  onChange: (pagination: TablePaginationConfig, __: any, sorter: any) => void;
  pagination: any;
  onEdit: (record: ISimulation) => () => void;
  onDelete: (record: ISimulation) => () => void;
}

const CustomerSimulationTable = (props: IProps) => {
  const { items, loading, onChange, onEdit, onDelete, pagination } = props;
  const { current, pageSize } = pagination;
  const rowKey = (item: ISimulation) => `${item.id}`;

  const expandedRowRender = (record: ISimulation): React.ReactNode => {
    const columns: ColumnsType<MaterialType> = [
      {
        title: 'カスタマイズ',
        dataIndex: 'material',
        key: 'material',
        sorter: false,
        align: 'center',
        width: 620,
        render: (_: any, record) => <p style={{ textAlign: 'center' }}>{record.material?.title}</p>,
      },
      {
        title: '価格',
        dataIndex: 'price',
        key: 'price',
        align: 'center',
        sorter: false,
        width: 300,
        render: (_any, record) => <p style={{ textAlign: 'center' }}>{record.price?.value}</p>,
      },
    ];
    return (
      <Table
        bordered
        dataSource={record.simulationComponent?.materialTypes || []}
        columns={columns}
        pagination={false}
      />
    );
  };

  const tableColumns: ColumnsType<ISimulation> = [
    {
      title: 'No',
      dataIndex: '#',
      key: '#',
      width: 40,
      render: (_, __, index) => <>{NumberOfRow(index, current, pageSize)}</>,
    },
    {
      title: '顧客名',
      dataIndex: 'customerName',
      key: 'customerName',
      width: 200,
      sorter: true,
      render: (_: any, record) => (
        <>
          {record.user?.firstName}
          {record.user?.lastName}
        </>
      ),
    },
    // {
    //   title: 'Type',
    //   dataIndex: 'type',
    //   key: 'type',
    //   width: 150,
    //   sorter: false,
    //   // render: (_: any, record) => <>{record.requests?.type}</>,
    // },
    {
      title: 'デザイン',
      dataIndex: 'design',
      key: 'design',
      width: 150,
      sorter: false,
      render: (_: any, record) => <>{record.simulationComponent?.style?.title}</>,
    },
    {
      title: '合計',
      dataIndex: 'totalPrice',
      key: 'totalPrice',
      width: 100,
      sorter: true,
      render: (_: any, record) => <>{totalPrice(record.simulationComponent?.materialTypes || [])}</>,
    },
    {
      title: '状態',
      dataIndex: 'status',
      key: 'status',
      width: 100,
      sorter: true,
    },
    {
      title: 'ツール',
      dataIndex: '',
      key: 'tool',
      width: 50,
      sorter: false,
      render: (_, record) => (
        <TableRowAction
          onDelete={onDelete}
          record={record}
          title="このシミュレーションを削除します。よろしいですか。"
        />
      ),
    },
  ];

  return (
    <Table
      expandable={{
        expandedRowRender,
        expandRowByClick: false,
      }}
      pagination={{
        ...pagination,
      }}
      columns={tableColumns}
      dataSource={items}
      loading={loading}
      rowKey={rowKey}
      onChange={onChange}
      bordered
    />
  );
};

export default CustomerSimulationTable;
