import { PageHeader } from 'antd';
import { CommonPath } from 'commons/base-routes';
import MaterialCollectionLayout from 'commons/components/layouts/MaterialCollection';
import { TypeForm } from 'commons/type';
import { setTitle } from 'helpers/dom';
import MaterialForm from 'modules/MaterialsCollection/components/UseForm';
import { useCreateUser } from 'modules/UserManagement/hooks/useCreateUser'
import React from 'react'

const MaterialCreateNew = () => {
    const { loading } = useCreateUser();
  React.useEffect(() => {
    setTitle('Create Material');
  }, []);
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
      path: CommonPath.MATERIAL_COLLECTION_NEW,
      breadcrumbName: 'Create Material Collection',
    },
  ];
    return (
        <div>
            <MaterialCollectionLayout>
                <MaterialForm title="Create Material Collection" type={TypeForm.CREATE} loading={loading} />
            </MaterialCollectionLayout>
        </div>
    )
}

export default MaterialCreateNew;
