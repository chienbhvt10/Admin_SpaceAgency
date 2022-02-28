import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, Form, Row, TablePaginationConfig } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import { SorterResult } from 'antd/lib/table/interface';
import { CommonPath } from 'commons/base-routes';
import FormDropdown from 'commons/components/layouts/FormDropdown';
import { FormSearch } from 'commons/components/layouts/FormSearch';
import MaterialCollectionLayout from 'commons/components/layouts/MaterialCollection';
import PageHeader from 'commons/components/layouts/PageHeader';
import TableHeader from 'commons/components/layouts/TableHeader';
import { TypeKeyFilterMaterials, TypePagination } from 'commons/type';
import { FilterInput, IMaterial } from 'graphql/generated/graphql';
import { setTitle } from 'helpers/dom';
import { OrderOfSorter } from 'helpers/string';
import { useListMaterial } from 'modules/MaterialsCollection/hooks/useListMaterial';
import { useRemoveMaterial } from 'modules/MaterialsCollection/hooks/useRemoveMaterial';
import { useGetAllStyles } from 'modules/StylesCollection/hooks/useGetAllStyles';
import { useGetAllThemes } from 'modules/ThemesCollection/hooks/useGetAllThemes';
import React from 'react';
import { useNavigate } from 'react-router';
import './style.scss';
import TableMaterial from './Table';

const MaterialCollectionPage = () => {
  const navigate = useNavigate();
  const [form] = useForm();
  const { dataMaterials, pagination, filterMaterials, paginationTable, loading, updatePaginationAndSorterMaterials } =
    useListMaterial();
  const { removeMaterial } = useRemoveMaterial();
  const { getAllStyles, dataAllStyles, loading: loadingAllThemes } = useGetAllStyles();
  const { getAllThemes, dataAllThemes, loading: loadingAllStyles } = useGetAllThemes();
  const [disabled, setDisabled] = React.useState<boolean>(true);
  const [value, setValue] = React.useState<string>('');
  const [selectId, setSelectId] = React.useState<{ themeId: string; styleId: string }>({
    themeId: '',
    styleId: '',
  });
  const arrFilter: FilterInput[] = [
    { key: TypeKeyFilterMaterials.NAME, value: '' },
    { key: TypeKeyFilterMaterials.STYLE, value: '', isRef: true },
    // { key: TypeKeyFilterMaterials.THEME, value: '', isRef: true },
  ];

  React.useEffect(() => {
    filterMaterials([]);
    setTitle('カスタマイズ一覧');
  }, []);

  React.useEffect(() => {
    if (value || selectId.themeId || selectId.styleId) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [value, selectId]);

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

  const onChangeValue = (e: any) => {
    setValue(e.target.value);
  };

  const onValuesChange = (values: { themeId: string; styleId: string }) => {
    if (values.styleId) {
      setSelectId({
        ...selectId,
        styleId: values.styleId,
      });
    }
    if (values.themeId) {
      setSelectId({
        ...selectId,
        themeId: values.themeId,
      });
    }
  };

  const onEdit = (record: IMaterial) => () => {
    navigate('/material-collection/detail/' + record.id);
  };

  const onDelete = (record: IMaterial) => () => {
    removeMaterial({ id: record.id });
  };

  const onDropdownVisibleChangeThemes = (open: boolean) => {
    if (open) {
      getAllThemes();
    }
  };

  const onDropdownVisibleChangeStyles = (open: boolean) => {
    if (open) {
      getAllStyles();
    }
  };

  const onReset = () => {
    setValue('');
    setDisabled(true);
    setSelectId({
      styleId: '',
      themeId: '',
    });
    form.setFieldsValue({
      styleId: undefined,
      themeId: undefined,
    });
    filterMaterials([]);
  };
  return (
    <MaterialCollectionLayout>
      <PageHeader title="" breadcrumb={{ routes }} />
      <TableHeader
        title="カスタマイズ一覧"
        extra={
          <Button type="primary" icon={<PlusOutlined />} onClick={handleAdd}>
            カスタマイズ
          </Button>
        }
      >
        <Row justify="center">
          <Col span={23}>
            <Form onValuesChange={onValuesChange} className="dropdown-select" form={form}>
              <Row style={{ marginLeft: '20px' }}>
                {/* <Col span={12}>
                  <FormDropdown
                    formItem={{
                      label: 'タイプ',
                      name: 'themeId',
                      labelCol: { span: 6 },
                      wrapperCol: { span: 16 },
                    }}
                    loading={loadingAllThemes}
                    options={[]}
                    onDropdownVisibleChange={onDropdownVisibleChangeThemes}
                    items={dataAllThemes}
                  />
                </Col> */}
                <Col span={12}>
                  <FormDropdown
                    formItem={{
                      label: 'デザイン',
                      name: 'styleId',
                      labelCol: { span: 6 },
                      wrapperCol: { span: 16 },
                    }}
                    loading={loadingAllStyles}
                    onDropdownVisibleChange={onDropdownVisibleChangeStyles}
                    items={dataAllStyles}
                    options={[]}
                  />
                </Col>
              </Row>
            </Form>
          </Col>
          <Col span={23}>
            <FormSearch
              disabled={disabled}
              onReset={onReset}
              value={value}
              onChange={onChangeValue}
              handleSearch={handleSearch}
            />
          </Col>
          <Col span={23}>
            <TableMaterial
              items={dataMaterials || []}
              loading={loading}
              onChange={onChange}
              pagination={paginationTable}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          </Col>
        </Row>
      </TableHeader>
    </MaterialCollectionLayout>
  );
};

export default MaterialCollectionPage;
const routes = [
  {
    path: CommonPath.DEFAULT_PATH,
    breadcrumbName: 'Home',
  },
  {
    path: CommonPath.MATERIAL_COLLECTION,
    breadcrumbName: 'カスタマイズ一覧',
  },
];
