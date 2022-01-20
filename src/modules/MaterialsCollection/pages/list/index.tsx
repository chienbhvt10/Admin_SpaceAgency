import { PlusOutlined } from '@ant-design/icons';
import { Button, Form, PageHeader, TablePaginationConfig } from 'antd';
import { SorterResult } from 'antd/lib/table/interface';
import { CommonPath } from 'commons/base-routes';
import FormDropdown from 'commons/components/layouts/FormDropdown';
import { FormSearch } from 'commons/components/layouts/FormSearch';
import MaterialCollectionLayout from 'commons/components/layouts/MaterialCollection';
import TableHeader from 'commons/components/layouts/TableHeader';
import { TypeKeyFilterMaterials, TypePagination } from 'commons/type';
import { FilterInput, IMaterial } from 'graphql/generated/graphql';
import { setTitle } from 'helpers/dom';
import { OrderOfSorter } from 'helpers/string';
import { useListMaterial } from 'modules/MaterialsCollection/hooks/useListMaterial';
import { useRemoveMaterial } from 'modules/MaterialsCollection/hooks/useRemoveMaterial';
import { useListStyles } from 'modules/StylesCollection/hooks/useListStyle';
import { useListThemes } from 'modules/ThemesCollection/hooks/useListThemes';
import React from 'react';
import { useNavigate } from 'react-router';
import './style.scss';
import TableMaterial from './Table';
const MaterialCollectionPage = () => {
  const navigate = useNavigate();
  const { dataMaterials, pagination, filterMaterials, paginationTable, loading, updatePaginationAndSorterMaterials } =
    useListMaterial();
  const { removeMaterial } = useRemoveMaterial();
  const { dataStyles } = useListStyles();
  const { dataThemes } = useListThemes();
  const [value, setValue] = React.useState<string>('');
  const [selectId, setSelectId] = React.useState<{ themeId: string; styleId: string }>({
    themeId: '',
    styleId: '',
  });
  const arrFilter: FilterInput[] = [
    { key: TypeKeyFilterMaterials.NAME, value: '' },
    { key: TypeKeyFilterMaterials.STYLE, value: '' },
    { key: TypeKeyFilterMaterials.THEME, value: '' },
  ];

  React.useEffect(() => {
    setTitle('Material Collection');
  }, []);

  const handleAdd = () => {
    navigate(CommonPath.MATERIAL_COLLECTION_NEW);
  };

  const onChange = (paginationTable: TablePaginationConfig, _: any, sorter: SorterResult<any>) => {
    const order = OrderOfSorter(sorter.order);
    const limit = pagination?.limit || TypePagination.DEFAULT_LIMIT;
    const current = paginationTable.current || 1;
    const skip = (current - 1) * limit;
    updatePaginationAndSorterMaterials(
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
    const newFilter = arrFilter.map((i) => ({
      ...i,
      value:
        i.key === TypeKeyFilterMaterials.NAME
          ? value
          : i.key === TypeKeyFilterMaterials.STYLE
          ? selectId.styleId
          : i.key === TypeKeyFilterMaterials.THEME
          ? selectId.themeId
          : '',
    }));
    filterMaterials(newFilter);
  };

  const onReset = () => {
    filterMaterials([]);
  };

  const onChangeValue = (e: any) => {
    setValue(e.target.value);
  };

  const onValuesChange = (values: { themeId: string; styleId: string }) => {
    setSelectId({
      ...selectId,
      styleId: values.styleId,
      themeId: values.themeId,
    });
  };

  const onEdit = (record: IMaterial) => () => {
    navigate('/material-collection/detail/' + record.id);
  };

  const onDelete = (record: IMaterial) => () => {
    removeMaterial({ id: record.id });
  };
  const routes = [
    {
      path: CommonPath.DEFAULT_PATH,
      breadcrumbName: 'Home',
    },
    {
      path: CommonPath.MATERIAL_COLLECTION,
      breadcrumbName: 'Material Collection',
    },
  ];
  return (
    <MaterialCollectionLayout>
      <PageHeader title="" breadcrumb={{ routes }}></PageHeader>
      <TableHeader
        title="Material Collection"
        extra={
          <Button type="primary" icon={<PlusOutlined />} onClick={handleAdd}>
            New Material
          </Button>
        }
      >
        <Form onValuesChange={onValuesChange} className="dropdown-select">
          <FormDropdown
            formItem={{
              label: 'Theme',
              name: 'themeId',
              labelCol: { span: 3 },
            }}
            options={[]}
            items={dataThemes}
          />
          <FormDropdown
            formItem={{
              label: 'Design',
              name: 'styleId',
              labelCol: { span: 3 },
            }}
            items={dataStyles}
            options={[]}
          />
        </Form>
        <FormSearch onReset={onReset} value={value} onChange={onChangeValue} handleSearch={handleSearch} />
        <TableMaterial
          items={dataMaterials || []}
          loading={loading}
          onChange={onChange}
          pagination={paginationTable}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      </TableHeader>
    </MaterialCollectionLayout>
  );
};

export default MaterialCollectionPage;