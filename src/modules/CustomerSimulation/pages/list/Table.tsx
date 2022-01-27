import { Table } from 'antd';
import { ColumnsType, TablePaginationConfig } from 'antd/lib/table';
import { ISimulation, MaterialType } from 'graphql/generated/graphql';
import { NumberOfRow, totalPrice } from 'helpers/string';
import TableRowAction from 'modules/CustomerSimulation/components/table-row-action';
import React from 'react';

interface Props {
  items: ISimulation[];
  loading: boolean;
  onChange: (pagination: TablePaginationConfig, __: any, sorter: any) => void;
  pagination: any;
  onEdit: (record: ISimulation) => () => void;
  onDelete: (record: ISimulation) => () => void;
}

const CustomerSimulationTable = (props: Props) => {
  const { items, loading, onChange, onEdit, onDelete, pagination } = props;
  const { current, pageSize } = pagination;
  const rowKey = (item: ISimulation) => `${item.id}`;

  const expandedRowRender = (record: ISimulation): React.ReactNode => {
    const columns: ColumnsType<MaterialType> = [
      {
        title: 'Material',
        dataIndex: 'material',
        key: 'material',
        sorter: false,
        render: (_: any, record) => <>{record.material?.title}</>,
      },
      {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        sorter: false,
        render: (_any, record) => <>{record.price?.value}</>,
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
      title: 'STT',
      dataIndex: '#',
      key: '#',
      width: 40,
      render: (_, __, index) => <>{NumberOfRow(index, current, pageSize)}</>,
    },
    {
      title: 'Customer Name',
      dataIndex: 'customerName',
      key: 'customerName',
      width: 40,
      sorter: true,
      render: (_: any, record) => (
        <>
          {record.user?.firstName}
          {record.user?.lastName}
        </>
      ),
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      width: 40,
      sorter: false,
      // render: (_: any, record) => <>{record.requests?.type}</>,
    },
    {
      title: 'Design',
      dataIndex: 'design',
      key: 'design',
      width: 40,
      sorter: false,
      render: (_: any, record) => <>{record.simulationComponent?.style?.title}</>,
    },
    {
      title: 'Total Price',
      dataIndex: 'totalPrice',
      key: 'totalPrice',
      width: 40,
      sorter: true,
      render: (_: any, record) => <>{totalPrice(record.simulationComponent?.materialTypes || [])}</>,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      width: 40,
      sorter: true,
    },
    {
      title: 'Tool',
      dataIndex: '',
      key: 'tool',
      width: 40,
      sorter: false,
      render: (_, record) => (
        <TableRowAction
          onDelete={onDelete}
          onEdit={onEdit}
          record={record}
          title="Are you sure to delete this Simulation?"
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
