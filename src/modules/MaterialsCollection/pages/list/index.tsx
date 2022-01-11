import { CommonPath } from 'commons/base-routes';
import MaterialCollectionLayout from 'commons/components/layouts/MaterialCollection';
import { FormSearch } from 'commons/components/layouts/FormSearch';
import { setTitle } from 'helpers/dom';
import React from 'react';
import TableHeader from 'commons/components/layouts/TableHeader';
import TableMaterial from './Table';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router';
import { useListMaterial } from 'modules/MaterialsCollection/hooks/useListMaterial';
import FormDropdown from 'commons/components/layouts/FormDropdown';
import './style.scss';
const MaterialCollectionPage = () => {
  const navigate = useNavigate();
  const { items, loading } = useListMaterial();
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
  return (
    <MaterialCollectionLayout>
      <TableHeader
        title="Material Managenent"
        extra={
          <Button type="primary" icon={<PlusOutlined />} onClick={handleAdd}>
            New Style
          </Button>
        }
      > 
        <div className="dropdown-select">
        <FormDropdown label='Themes' />
        <FormDropdown label='Design'/>
        </div>
        <FormSearch />
        <TableMaterial items={items} rowKey={rowKey} loading={loading} onChange={onChange} handleAdd={handleAdd} />
      </TableHeader>
     
      
    </MaterialCollectionLayout>
  );
};

export default MaterialCollectionPage;
