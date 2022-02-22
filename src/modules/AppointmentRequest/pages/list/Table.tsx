import { Table, TablePaginationConfig } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { IAppointmentRequest } from 'graphql/generated/graphql';
import { NumberOfRow } from 'helpers/string';
import AppointmentTableRowAction from 'modules/AppointmentRequest/components/table-row-action';
import React from 'react';

type IProps = {
  items: IAppointmentRequest[];
  loading: boolean;
  onChange: (pagination: TablePaginationConfig, __: any, sorter: any) => void;
  pagination: any;
  onEdit?: (record: IAppointmentRequest) => () => void;
  onDelete?: (record: IAppointmentRequest) => () => void;
};

const AppointmentTable = (props: IProps) => {
  const { items, loading, onChange, onDelete, onEdit, pagination } = props;
  const { current, pageSize } = pagination;
  const rowKey = (item: IAppointmentRequest) => `${item.id}`;

  const columns: ColumnsType<IAppointmentRequest> = [
    {
      title: 'No',
      dataIndex: '#',
      key: '#',
      width: 60,
      render: (_, __, index) => <>{NumberOfRow(index, current, pageSize)}</>,
    },
    {
      title: 'Eメール',
      dataIndex: 'email',
      key: 'email',
      sorter: true,
      sortDirections: ['descend', 'ascend'],
      width: 200,
    },
    {
      title: '氏名',
      dataIndex: 'requesterFullName',
      key: 'requesterFullName',
      sorter: true,
      sortDirections: ['descend', 'ascend'],
      width: 200,
    },
    {
      title: '電話番号',
      dataIndex: 'tel',
      key: 'tel',
      sortDirections: ['descend', 'ascend'],
      sorter: true,
      width: 100,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      sorter: false,
      width: 150,
    },
    {
      title: 'Date1',
      dataIndex: 'appointmentDate1',
      key: 'appointmentDate1',
      sorter: false,
      width: 100,
    },
    {
      title: 'Date2',
      dataIndex: 'appointmentDate2',
      key: 'appointmentDate2',
      sorter: false,
      width: 100,
    },
    {
      title: '編集',
      dataIndex: '',
      key: '#',
      width: 120,
      render: (_, record) => (
        <AppointmentTableRowAction
          onDelete={onDelete}
          onEdit={onEdit}
          record={record}
          title="Are you sure to delete this Appointment?"
        />
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={items}
      loading={loading}
      rowKey={rowKey}
      onChange={onChange}
      bordered
      pagination={{
        ...pagination,
      }}
    />
  );
};

export default AppointmentTable;
