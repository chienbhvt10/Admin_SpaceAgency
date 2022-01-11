import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, Row, Select, Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { CommonPath } from 'commons/base-routes';
import TableHeader from 'commons/components/layouts/TableHeader';
import { nestedSimulationTableColumns, simulationTableColumns } from 'helpers/table-columns';
import { UserSimulation } from 'helpers/temp-type';
import TableRowAction from 'modules/CustomerSimulation/components/table-row-action';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import FilterForm from '../../components/filter-form/FilterForm';
const { Option } = Select;

interface Props {
  items: any;
  loading: boolean;
  rowKey: any;
  onChange: () => void;
  handleAdd: () => void;
}

const themeOptions: any = [];
for (let i = 0; i < 10; i++) {
  themeOptions.push(<Option key={i.toString(36) + i}>Theme {i}</Option>);
}
const CustomerSimulationTable = (props: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { handleAdd, items, loading, onChange, rowKey } = props;
  const onDelete = (record: any) => () => {
    // dispatch delete action
  };
  const onEdit = (record: any) => () => {
    navigate(CommonPath.USER_SIMULATE_COLLECTION_DETAIL + record._id);
  };

  const expandedRowRender = (record: UserSimulation): React.ReactNode => {
    const columns = nestedSimulationTableColumns;
    return <Table bordered dataSource={record.detail} columns={columns} pagination={false}></Table>;
  };
  const tableColumns: ColumnsType<UserSimulation> = [
    ...simulationTableColumns,
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
          key={rowKey}
        />
      ),
    },
  ];
  return (
    <TableHeader
      title="Customer Simulation Collections"
      extra={
        <Button type="primary" icon={<PlusOutlined />} onClick={handleAdd}>
          Simulation
        </Button>
      }
    >
      <Row justify="center">
        <Col span={22}>
          <FilterForm options={themeOptions} />
        </Col>
        <Col span={22}>
          <Table
            expandable={{
              expandedRowRender,
              expandRowByClick: true,
            }}
            columns={tableColumns}
            dataSource={items}
            loading={loading}
            rowKey={rowKey}
            onChange={onChange}
            bordered
          />
        </Col>
      </Row>
    </TableHeader>
  );
};

export default CustomerSimulationTable;
