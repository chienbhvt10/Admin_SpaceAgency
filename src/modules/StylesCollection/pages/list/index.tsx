import { CommonPath } from 'commons/base-routes';
import PageHeader from 'commons/components/layouts/PageHeader';
import StyleCollectionLayout from 'commons/components/layouts/StylesCollection';
import { setTitle } from 'helpers/dom';
import React from 'react';

const StyleCollectionPage = () => {
  React.useEffect(() => {
    setTitle('Style Collection');
  }, []);
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
    </StyleCollectionLayout>
  );
};

export default StyleCollectionPage;
