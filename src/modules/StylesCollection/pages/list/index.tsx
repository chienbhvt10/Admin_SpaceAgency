import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, Row, Select, TablePaginationConfig } from 'antd';
import { SorterResult } from 'antd/lib/table/interface';
import { CommonPath } from 'commons/base-routes';
import PageHeader from 'commons/components/layouts/PageHeader';
import StyleCollectionLayout from 'commons/components/layouts/StylesCollection';
import TableHeader from 'commons/components/layouts/TableHeader';
import { TypeKeyFilterStyle, TypePagination, TypeSortStyle } from 'commons/type';
import { FilterInput, IStyle } from 'graphql/generated/graphql';
import { setTitle } from 'helpers/dom';
import { OrderOfSorter } from 'helpers/string';
import FilterForm from 'modules/StylesCollection/components/FilterForm';
import useListStyles from 'modules/StylesCollection/hooks/useListStyles';
import { useRemoveStyle } from 'modules/StylesCollection/hooks/useRemoveStyle';
import React from 'react';
import { useNavigate } from 'react-router';
import StyleCollectionTable from './Table';

const { Option } = Select;
const themeOptions: any = [];
for (let i = 0; i < 10; i++) {
  themeOptions.push(<Option key={i.toString(36) + i}>Theme {i}</Option>);
}

const StyleCollectionPage = () => {
  const { dataStyles, loading, paginationTable, updatePaginationAndSorterStyle, pagination, filterStyle } =
    useListStyles();
  console.log(dataStyles);
  const navigate = useNavigate();
  const { removeStyle } = useRemoveStyle();
  const [value, setValue] = React.useState<string>('');
  const routes = [
    {
      path: CommonPath.DEFAULT_PATH,
      breadcrumbName: 'Home',
    },
    {
      path: CommonPath.THEME_COLLECTION,
      breadcrumbName: 'Style Collection',
    },
  ];

  React.useEffect(() => {
    setTitle('Style Collection');
  }, []);

  const onChangeValue = (e: any) => {
    setValue(e.target.value);
  };

  const arrFilter: FilterInput[] = [{ key: TypeKeyFilterStyle.NAME, value: '' }];

  const onChange = (paginationTable: TablePaginationConfig, _: any, sorter: SorterResult<any>) => {
    const order = OrderOfSorter(sorter.order);
    const limit = pagination.limit || TypePagination.DEFAULT_LIMIT;
    const current = paginationTable.current || 1;
    const skip = (current - 1) * limit;

    updatePaginationAndSorterStyle(
      {
        skip,
        limit,
      },
      sorter.field === TypeSortStyle.NAME && order
        ? [
            {
              key: TypeSortStyle.NAME,
              value: order,
            },
          ]
        : [],
    );
  };
  const onDelete = (record: IStyle) => () => {
    removeStyle({
      id: record.id,
    });
  };
  const onEdit = (record: IStyle) => () => {
    navigate('/styles-collection/detail/' + record.id);
  };

  const onNew = () => {
    navigate(CommonPath.STYLES_COLLECTION_NEW);
  };

  const handleSearch = (value: string) => () => {
    const newFilter = arrFilter.map((i) => ({
      ...i,
      value: i.key === TypeKeyFilterStyle.NAME ? value : '',
    }));
    filterStyle(newFilter);
  };
  const onReset = () => {
    setValue('');
    filterStyle([]);
  };

  return (
    <StyleCollectionLayout>
      <PageHeader title="" breadcrumb={{ routes }} />
      <TableHeader
        title="Style list"
        extra={
          <Button type="primary" icon={<PlusOutlined />} onClick={onNew}>
            Style
          </Button>
        }
      >
        <Row justify="center">
          <Col span={24}>
            <FilterForm
              handleSearch={handleSearch}
              onChange={onChangeValue}
              value={value}
              onReset={onReset}
              options={themeOptions}
            />
          </Col>
          <Col span={24}>
            <StyleCollectionTable
              onDelete={onDelete}
              onEdit={onEdit}
              items={dataStyles}
              loading={loading}
              onChange={onChange}
              pagination={paginationTable}
            />{' '}
          </Col>
        </Row>
      </TableHeader>
    </StyleCollectionLayout>
  );
};

export default StyleCollectionPage;
