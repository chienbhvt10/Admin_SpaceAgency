import { CommonPath } from 'commons/base-routes';
import MaterialCollectionLayout from 'commons/components/layouts/MaterialCollection';
import { FormSearch } from 'commons/components/layouts/FormSearch';
import { setTitle } from 'helpers/dom';
import React from 'react';
import TableHeader from 'commons/components/layouts/TableHeader';
import TableMaterial from './Table';
import { Button, PageHeader } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router';
import { useListMaterial } from 'modules/MaterialsCollection/hooks/useListMaterial';
import FormDropdown from 'commons/components/layouts/FormDropdown';
import './style.scss';
import { IMaterial } from 'graphql/generated/graphql';
const MaterialCollectionPage = () => {
  const navigate = useNavigate();
  const { dataMaterials, pagination, where, paginationTable, loading } = useListMaterial();
  const [value, setValue] = React.useState<string>('');
  React.useEffect(() => {
    setTitle('Material Collection');
  }, []);
  const rowKey = (item: any) => `${item._id}`;
  const handleAdd = () => {
    navigate(CommonPath.MATERIAL_COLLECTION_NEW);
  };

  const onChange = () => {};
  const routes = [
    {
      path: CommonPath.DEFAULT_PATH,
      breadcrumbName: 'Home',
    },
    {
      path: CommonPath.THEME_COLLECTION,
      breadcrumbName: 'Material Collection',
    },
  ];
  const handleSearch = (value: string) => () => {};
  const onChangeValue = (e: any) => () => {};
  const onEdit = (record: IMaterial) => () => {};
  const onDelete = (record: IMaterial) => () => {};
  return (
    <MaterialCollectionLayout>
      <PageHeader title="" breadcrumb={{ routes }}></PageHeader>
      <TableHeader
        title="Material Managenent"
        extra={
          <Button type="primary" icon={<PlusOutlined />} onClick={handleAdd}>
            New Material
          </Button>
        }
      >
        <div className="dropdown-select">
          <FormDropdown
            formItem={{
              label: 'Theme',
              name: 'theme',
              labelCol: { span: 3 },
            }}
            options={[]}
          />
          <FormDropdown
            formItem={{
              label: 'Design',
              name: 'design',
              labelCol: { span: 3 },
            }}
            options={[]}
          />
        </div>
        <FormSearch value={value} onChange={onChangeValue} handleSearch={handleSearch} />
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
