import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, Row, Select, Table } from 'antd';
import { ColumnsType, TablePaginationConfig } from 'antd/lib/table';
import TableHeader from 'commons/components/layouts/TableHeader';
import { ISimulation, MaterialType } from 'graphql/generated/graphql';
import { NumberOfRow, totalPrice } from 'helpers/string';
import { nestedSimulationTableColumns } from 'helpers/table-columns';
import TableRowAction from 'modules/CustomerSimulation/components/table-row-action';
import React from 'react';
const { Option } = Select;

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
        sorter: true,
        render: (_: any, record) => <>{record.material?.title}</>,
      },
      {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        sorter: true,
        render: (_any, record) => <>{record.price?.value}</>,
      },
    ];
    return (
      <Table
        bordered
        dataSource={record.simulationComponent?.materialTypes || []}
        columns={columns}
        pagination={false}
      ></Table>
    );
  };

  const onNew = () => {};

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
      key: '#',
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
      key: '#',
      width: 40,
      sorter: false,
      render: (_: any, record) => <>{record.request?.type}</>,
    },
    {
      title: 'Design',
      dataIndex: 'design',
      key: '#',
      width: 40,
      sorter: false,
      render: (_: any, record) => <>{record.simulationComponent?.style?.title}</>,
    },
    {
      title: 'Total Price',
      dataIndex: 'totalPrice',
      key: '#',
      width: 40,
      sorter: true,
      render: (_: any, record) => <>{totalPrice(record.simulationComponent?.materialTypes || [])}</>,
    },
    {
      title: 'Status',
      dataIndex: 'status',
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
          title="Are you sure to delete this Simulation?"
          key={rowKey.toString()}
        />
      ),
    },
  ];

  return (
    <TableHeader
      title="Customer Simulation Collections"
      extra={
        <Button type="primary" icon={<PlusOutlined />} onClick={onNew}>
          Simulation
        </Button>
      }
    >
      <Row justify="center">
        <Col span={24}>{/* <FilterForm options={themeOptions} /> */}</Col>
        <Col span={24}>
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
            rowKey={rowKey.toString()}
            onChange={onChange}
            bordered
          />
        </Col>
      </Row>
    </TableHeader>
  );
};

export default CustomerSimulationTable;
