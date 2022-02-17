import { Table } from 'antd';
import { ColumnsType, TablePaginationConfig } from 'antd/lib/table';
import { CommonPath } from 'commons/base-routes';
import UserRowActions from 'commons/components/layouts/ActionTable';
import { ITheme } from 'graphql/generated/graphql';
import { formatPriceJapan, NumberOfRow } from 'helpers/string';
import { useNavigate } from 'react-router';
import { useRemoveTheme } from '../../hooks/useRemoveTheme';
interface IProps {
  items: ITheme[];
  loading: boolean;
  onChange: (pagination: TablePaginationConfig, __: any, sorter: any) => void;
  handleAdd: () => void;
  pagination: any;
}
function TableThemes(props: IProps) {
  const navigate = useNavigate();
  const { removeTheme } = useRemoveTheme();
  const { items, loading, onChange, handleAdd, pagination } = props;
  const rowKey = (item: ITheme) => `${item.id}`;
  const { current, pageSize } = pagination;
  const onEdit = (record: ITheme) => () => {
    navigate(CommonPath.THEME_COLLECTION_UPDATE + record.id);
  };
  const onDelete = (record: ITheme) => () => {
    removeTheme({ id: record.id });
  };
  const columns: ColumnsType<ITheme> = [
    {
      title: 'No',
      dataIndex: '#',
      key: '#',
      width: 60,
      render: (_, __, index) => <>{NumberOfRow(index, current, pageSize)}</>,
    },
    {
      title: '名称',
      dataIndex: 'title',
      key: 'title',
      sortDirections: ['descend', 'ascend'],
      sorter: true,
      width: 300,
    },
    {
      title: '英語表記',
      key: 'nameEnglish',
      sorter: false,
      width: 300,
      render: (_: any, record: ITheme) => (
        <>{record && record.themeCategories && record.themeCategories.length && record.themeCategories[0].title}</>
      ),
    },
    {
      title: '3Dコード',
      dataIndex: 'code3D',
      key: 'code3D',
      sortDirections: ['descend', 'ascend'],
      sorter: true,
      width: 150,
    },
    {
      title: '価格',
      dataIndex: 'price',
      key: 'price',
      sortDirections: ['descend', 'ascend'],
      sorter: true,
      width: 150,
      render: (_: any, record: ITheme) => <>{formatPriceJapan(record.price?.value || 0)}</>,
    },
    {
      title: '編集',
      dataIndex: '',
      key: 'tools',
      align: 'center',
      width: 150,
      render: (_: any, record: ITheme) => (
        <UserRowActions
          title="Are you sure you want to delete this theme?"
          record={record}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ),
    },
  ];
  return (
    <div>
      <Table
        pagination={{
          ...pagination,
          showSizeChanger: false,
        }}
        columns={columns}
        dataSource={items}
        loading={loading}
        rowKey={rowKey}
        onChange={onChange}
      />
    </div>
  );
}

export default TableThemes;
