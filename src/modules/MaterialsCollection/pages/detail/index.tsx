import { PageHeader } from 'antd';
import { CommonPath } from 'commons/base-routes';
import MaterialCollectionLayout from 'commons/components/layouts/MaterialCollection';
import { TypeForm } from 'commons/type';
import { setTitle } from 'helpers/dom';
import MaterialForm from 'modules/MaterialsCollection/components/UseForm';
import { useDetailMaterial } from 'modules/MaterialsCollection/hooks/useDetailMaterial';
import React from 'react';
import { useParams } from 'react-router';

const MaterialUpdate = () => {
  let { id } = useParams<'id'>();
  const { getDetailMaterial } = useDetailMaterial();
  React.useEffect(() => {
    setTitle('Update Material');
  }, []);
  React.useEffect(() => {
    if (id) {
      getDetailMaterial(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  const routes = [
    {
      path: CommonPath.DEFAULT_PATH,
      breadcrumbName: 'Home',
    },
    {
      path: CommonPath.MATERIAL_COLLECTION,
      breadcrumbName: 'Material Collection',
    },
    {
      path: CommonPath.MATERIAL_COLLECTION_DETAIL,
      breadcrumbName: 'Detail Material Collection',
    },
  ];
  return (
    <div>
      <MaterialCollectionLayout>
        <PageHeader title="Update User" breadcrumb={{ routes }} />
        <MaterialForm title="Update Material Collection" type={TypeForm.UPDATE} loading={false} />
      </MaterialCollectionLayout>
    </div>
  );
};

export default MaterialUpdate;
