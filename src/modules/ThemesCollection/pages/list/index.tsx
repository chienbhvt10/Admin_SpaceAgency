import { CommonPath } from 'commons/base-routes';
import PageHeader from 'commons/components/layouts/PageHeader';
import ThemeCollectionLayout from 'commons/components/layouts/ThemesCollection';
import { setTitle } from 'helpers/dom';
import React from 'react';
import { FormSearch } from 'commons/components/layouts/FormSearch';
import TableThemes from './Table';
import { Button, TablePaginationConfig, Row, Col } from 'antd';
import { useNavigate } from 'react-router';
import { PlusOutlined } from '@ant-design/icons';
import { useListThemes } from 'modules/ThemesCollection/hooks/useListThemes';
import TableHeader from 'commons/components/layouts/TableHeader';
import { OrderOfSorter } from 'helpers/string';
import { SorterResult } from 'antd/lib/table/interface';
import { TypeKeyFilterTheme, TypePagination } from 'commons/type';
import { FilterInput } from 'graphql/generated/graphql';

const ThemeCollectionPage = () => {
  const navigate = useNavigate();
  const { dataThemes, loading, paginationTable, pagination, updatePaginationAndSorterThemes, filterTheme } =
    useListThemes();
  const [value, setValue] = React.useState<string>('');
  const [disabled, setDisabled] = React.useState<boolean>(true);
  const [arrFilter, setArrFilter] = React.useState<FilterInput[]>([{ key: TypeKeyFilterTheme.NAME, value: '' }]);

  const routes = [
    {
      path: CommonPath.DEFAULT_PATH,
      breadcrumbName: 'HOME',
    },
    {
      path: CommonPath.THEME_COLLECTION,
      breadcrumbName: 'テーマ一覧',
    },
  ];
  React.useEffect(() => {
    setTitle('テーマ一覧');
  }, []);

  React.useEffect(() => {
    if (value) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [value]);

  const handleAdd = () => {
    navigate(CommonPath.THEME_COLLECTION_NEW);
  };

  const onChange = (paginationTable: TablePaginationConfig, _: any, sorter: SorterResult<any>) => {
    const order = OrderOfSorter(sorter.order);
    const limit = pagination?.limit || TypePagination.DEFAULT_LIMIT;
    const current = paginationTable.current || 1;
    const skip = (current - 1) * limit;
    updatePaginationAndSorterThemes(
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

  const handleSearch = () => {
    const newFilter = arrFilter.map((filterInput) => ({
      ...filterInput,
      value: filterInput.key === TypeKeyFilterTheme.NAME ? value : '',
    }));
    filterTheme(newFilter);
    setArrFilter([{ key: TypeKeyFilterTheme.NAME, value: '' }]);
  };
  const onChangeValue = (e: any) => {
    setValue(e.target.value);
  };
  const onReset = () => {
    setValue('');
    filterTheme([]);
  };

  return (
    <ThemeCollectionLayout>
      <PageHeader title="" breadcrumb={{ routes }} />
      <TableHeader
        title="テーマ一覧"
        extra={
          <Button type="primary" icon={<PlusOutlined />} onClick={handleAdd}>
            New Theme
          </Button>
        }
      >
        <Row justify="center">
          <Col span={23}>
            <FormSearch
              disabled={disabled}
              onReset={onReset}
              onChange={onChangeValue}
              value={value}
              handleSearch={handleSearch}
            />
          </Col>
          <Col span={23}>
            <TableThemes
              pagination={paginationTable}
              items={dataThemes}
              loading={loading}
              onChange={onChange}
              handleAdd={handleAdd}
            />
          </Col>
        </Row>
      </TableHeader>
    </ThemeCollectionLayout>
  );
};

export default ThemeCollectionPage;
