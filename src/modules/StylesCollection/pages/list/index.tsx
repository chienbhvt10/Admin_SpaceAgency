import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, Row, TablePaginationConfig } from 'antd';
import { SorterResult } from 'antd/lib/table/interface';
import { CommonPath } from 'commons/base-routes';
import PageHeader from 'commons/components/layouts/PageHeader';
import StyleCollectionLayout from 'commons/components/layouts/StylesCollection';
import TableHeader from 'commons/components/layouts/TableHeader';
import { TypeKeyFilterStyle, TypePagination } from 'commons/type';
import { FilterInput, IStyle } from 'graphql/generated/graphql';
import { setTitle } from 'helpers/dom';
import { OrderOfSorter } from 'helpers/string';
import FilterForm from 'modules/StylesCollection/components/FilterForm';
import { useListStyles } from 'modules/StylesCollection/hooks/useListStyle';
import { useRemoveStyle } from 'modules/StylesCollection/hooks/useRemoveStyle';
import React from 'react';
import { useNavigate } from 'react-router';
import StyleCollectionTable from './Table';

const StyleCollectionPage = () => {
  const { dataStyles, loading, paginationTable, updatePaginationAndSorterStyles, pagination, filterStyles } =
    useListStyles();
  const navigate = useNavigate();
  const { removeStyle } = useRemoveStyle();
  const [searchValue, setSearchValue] = React.useState<string>('');
  const [themeId, setThemeId] = React.useState<string>('');
  const [disabled, setDisabled] = React.useState<boolean>();

  React.useEffect(() => {
    setTitle('Style Collection');
  }, []);

  React.useEffect(() => {
    if (searchValue || themeId) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [searchValue, themeId]);

  const onChangeValue = (e: any) => {
    setSearchValue(e.target.value);
  };

  const onChangeTheme = (value: string) => {
    setThemeId(value);
  };

  const arrFilter: FilterInput[] = [
    { key: TypeKeyFilterStyle.NAME, value: '', isRef: false },
    { key: TypeKeyFilterStyle.THEME, value: '', isRef: false },
  ];

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

  const onChange = (paginationTable: TablePaginationConfig, _: any, sorter: SorterResult<any>) => {
    const order = OrderOfSorter(sorter.order);
    const limit = pagination?.limit || TypePagination.DEFAULT_LIMIT;
    const current = paginationTable.current || 1;
    const skip = (current - 1) * limit;
    updatePaginationAndSorterStyles(
      {
        skip,
        limit,
      },
      {
        key: sorter.columnKey?.toString() || '',
        value: order,
      },
    );
  };

  const onNew = () => {
    navigate(CommonPath.STYLES_COLLECTION_NEW);
  };

  const onDelete = (record: IStyle) => () => {
    removeStyle({
      id: record.id,
    });
  };

  const onEdit = (record: IStyle) => () => {
    navigate('/styles-collection/detail/' + record.id);
  };

  const handleSearch = () => {
    const newFilter = arrFilter.map((i) => ({
      ...i,
      value: i.key === TypeKeyFilterStyle.NAME ? searchValue : i.key === TypeKeyFilterStyle.THEME ? themeId : '',
    }));
    filterStyles(newFilter);
  };

  const onReset = () => {
    setSearchValue('');
    filterStyles([]);
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
              themeId={themeId}
              disabled={disabled}
              onChangeTheme={onChangeTheme}
              value={searchValue}
              handleSearch={handleSearch}
              onReset={onReset}
              onChangeValue={onChangeValue}
            />
          </Col>
          <Col span={24}>
            <StyleCollectionTable
              pagination={paginationTable}
              onDelete={onDelete}
              onEdit={onEdit}
              items={dataStyles || []}
              loading={loading}
              onChange={onChange}
            />
          </Col>
        </Row>
      </TableHeader>
    </StyleCollectionLayout>
  );
};

export default StyleCollectionPage;
