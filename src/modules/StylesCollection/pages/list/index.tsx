import { TablePaginationConfig } from 'antd';
import { SorterResult } from 'antd/lib/table/interface';
import { CommonPath } from 'commons/base-routes';
import PageHeader from 'commons/components/layouts/PageHeader';
import StyleCollectionLayout from 'commons/components/layouts/StylesCollection';
import { TypePagination } from 'commons/type';
import { setTitle } from 'helpers/dom';
import { OrderOfSorter } from 'helpers/string';
import { useListStyles } from 'modules/StylesCollection/hooks/useListStyle';
import React from 'react';
import { useNavigate } from 'react-router';
import StyleCollectionTable from './Table';

const StyleCollectionPage = () => {
  const { dataStyles, loading, paginationTable, updatePaginationAndSorterStyles, pagination, filterStyles } =
    useListStyles();
  const navigate = useNavigate();
  React.useEffect(() => {
    setTitle('Style Collection');
  }, []);
  const handleAdd = () => {
    navigate(CommonPath.STYLES_COLLECTION_NEW);
  };
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
  const onDelete = () => () => {};
  const onEdit = () => () => {};
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
  return (
    <StyleCollectionLayout>
      <PageHeader title="" breadcrumb={{ routes }} />
      <StyleCollectionTable
        pagination={paginationTable}
        onDelete={onDelete}
        onEdit={onEdit}
        items={dataStyles || []}
        loading={loading}
        onChange={onChange}
      />
    </StyleCollectionLayout>
  );
};

export default StyleCollectionPage;
