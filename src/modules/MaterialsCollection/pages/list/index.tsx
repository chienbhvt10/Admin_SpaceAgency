import { CommonPath } from 'commons/base-routes';
import MaterialCollectionLayout from 'commons/components/layouts/MaterialCollection';
import PageHeader from 'commons/components/layouts/PageHeader';
import { setTitle } from 'helpers/dom';
import React from 'react';

const MaterialCollectionPage = () => {
  React.useEffect(() => {
    setTitle('Material Collection');
  }, []);
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
      <PageHeader title="" breadcrumb={{ routes }} />
    </MaterialCollectionLayout>
  );
};

export default MaterialCollectionPage;
