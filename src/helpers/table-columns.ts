import { ColumnsType } from 'antd/lib/table';
import { Detail, Style, UserSimulation } from 'helpers/temp-type';
export const simulationTableColumns: ColumnsType<UserSimulation> = [
  {
    title: 'Type',
    dataIndex: 'type',
    key: '#',
    width: 40,
    sorter: true,
  },
  {
    title: 'Design',
    dataIndex: 'design',
    key: '#',
    width: 40,
    sorter: true,
  },
  {
    title: 'Customer Name',
    dataIndex: 'customerName',
    key: '#',
    width: 40,
    sorter: true,
  },
  {
    title: 'Total Price',
    dataIndex: 'totalPrice',
    key: '#',
    width: 40,
    sorter: true,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: '#',
    width: 40,
    sorter: true,
  },
];
export const nestedSimulationTableColumns: ColumnsType<Detail> = [
  {
    title: 'Material',
    dataIndex: 'material',
    key: '#',
    sorter: true,
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: '#',
    sorter: true,
  },
];

export const styleTableColumns: ColumnsType<Style> = [
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
];
