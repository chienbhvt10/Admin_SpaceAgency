import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, Row, TablePaginationConfig } from 'antd';
import { SorterResult } from 'antd/lib/table/interface';
import { CommonPath } from 'commons/base-routes';
import { FormSearch } from 'commons/components/layouts/FormSearch';
import PageHeader from 'commons/components/layouts/PageHeader';
import TableHeader from 'commons/components/layouts/TableHeader';
import ThemeCollectionLayout from 'commons/components/layouts/ThemesCollection';
import { TypeKeyFilterTheme, TypePagination } from 'commons/type';
import { setTitle } from 'helpers/dom';
import { OrderOfSorter } from 'helpers/string';
import { useListThemes } from 'modules/ThemesCollection/hooks/useListThemes';
import React from 'react';
import { useNavigate } from 'react-router';
import TableThemes from './Table';

const ThemeCollectionPage = () => {
  const navigate = useNavigate();
  const { dataThemes, loading, paginationTable, pagination, updatePaginationAndSorterThemes, filterTheme } =
    useListThemes();
  const [value, setValue] = React.useState<string>('');
  const [disabled, setDisabled] = React.useState<boolean>(true);
  const arrFilter = [{ key: TypeKeyFilterTheme.NAME, value: '' }];

  const routes = [
    {
      path: CommonPath.DEFAULT_PATH,
      breadcrumbName: 'Home',
    },
    {
      path: CommonPath.THEME_COLLECTION,
      breadcrumbName: 'タイプ一覧',
    },
  ];
  React.useEffect(() => {
    setTitle('タイプ一覧');
    filterTheme([]);
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
        title="タイプ一覧"
        extra={
          <Button type="primary" icon={<PlusOutlined />} onClick={handleAdd}>
            タイプ
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
