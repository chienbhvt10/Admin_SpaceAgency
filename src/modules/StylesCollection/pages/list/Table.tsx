import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, Row, Select, Table } from 'antd';
import { ColumnsType, TablePaginationConfig } from 'antd/lib/table';
import { CommonPath } from 'commons/base-routes';
import TableHeader from 'commons/components/layouts/TableHeader';
import { TypeKeyFilterStyle } from 'commons/type';
import { FilterInput, IStyle } from 'graphql/generated/graphql';
import { NumberOfRow } from 'helpers/string';
import FilterForm from 'modules/StylesCollection/components/FilterForm';
import TableRowAction from 'modules/StylesCollection/components/table-row-action';
import React from 'react';
import { useNavigate } from 'react-router';

const { Option } = Select;
const themeOptions: any = [];
for (let i = 0; i < 10; i++) {
  themeOptions.push(<Option key={i.toString(36) + i}>Theme {i}</Option>);
}
interface IProps {
  items: IStyle[];
  loading: boolean;
  onChange: (pagination: TablePaginationConfig, __: any, sorter: any) => void;
  pagination: any;
  onEdit: (record: IStyle) => () => void;
  onDelete: (record: IStyle) => () => void;
}
const StyleCollectionTable = (props: IProps) => {
  const { items, loading, onChange, pagination } = props;
  const { current, pageSize } = pagination;
  const [value, setValue] = React.useState<string>('');
  const arrFilter: FilterInput[] = [{ key: TypeKeyFilterStyle.NAME, value: '' }];

  const navigate = useNavigate();
  const onEdit = (record: any) => () => {
    navigate(CommonPath.STYLES_COLLECTION_DETAIL + record._id);
  };
  const handleAdd = () => {};
  const onDelete = (record: any) => () => {};
  const rowKey = (item: IStyle) => `${item.id}`;
  const handleSearch = () => {
    const newFilter = arrFilter.map((i) => ({
      ...i,
      value: i.key === TypeKeyFilterStyle.NAME ? value : '',
    }));
  };
  const onReset = () => {};
  const onChangeValue = (e: any) => {
    setValue(e.target.value);
  };

  const columns: ColumnsType<IStyle> = [
    {
      title: 'STT',
      dataIndex: '#',
      key: '#',
      width: 40,
      render: (_, __, index) => <>{NumberOfRow(index, current, pageSize)}</>,
    },
    {
      title: 'Name',
      dataIndex: 'title',
      key: 'title',
      sortDirections: ['descend', 'ascend'],
      sorter: true,
    },
    {
      title: 'Theme',
      dataIndex: 'theme',
      key: 'theme',
      sortDirections: ['descend', 'ascend'],
      sorter: true,
      render: (_, record) => <>{record.theme?.title}</>,
    },
    {
      title: 'Order',
      dataIndex: 'order',
      key: 'order',
      sortDirections: ['descend', 'ascend'],
      sorter: true,
    },
    {
      title: '3D Code',
      dataIndex: 'code3d',
      key: 'code3d',
      sortDirections: ['descend', 'ascend'],
      sorter: true,
    },
    {
      title: 'Price',
      dataIndex: 'price',
      sortDirections: ['descend', 'ascend'],
      key: 'price',
      sorter: true,
      render: (_, record) => <>{record.price?.value}</>,
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
        <Col span={24}>
          <FilterForm value={value} handleSearch={handleSearch} onReset={onReset} onChangeValue={onChangeValue} />
        </Col>
        <Col span={24}>
          <Table
            columns={columns}
            dataSource={items}
            loading={loading}
            rowKey={rowKey}
            onChange={onChange}
            pagination={{
              ...pagination,
              showSizeChanger: false,
            }}
          />
        </Col>
      </Row>
    </TableHeader>
  );
};

export default StyleCollectionTable;
