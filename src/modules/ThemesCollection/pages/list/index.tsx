import { CommonPath } from 'commons/base-routes';
import PageHeader from 'commons/components/layouts/PageHeader';
import ThemeCollectionLayout from 'commons/components/layouts/ThemesCollection';
import { setTitle } from 'helpers/dom';
import React from 'react';

const ThemeCollectionPage = () => {
  React.useEffect(() => {
    setTitle('Theme Collection');
  }, []);
  const routes = [
    {
      path: CommonPath.DEFAULT_PATH,
      breadcrumbName: 'Home',
    },
    {
      path: CommonPath.THEME_COLLECTION,
      breadcrumbName: 'Themes Collection',
    },
  ];
  return (
    <ThemeCollectionLayout>
      <PageHeader title="" breadcrumb={{ routes }} />
    </ThemeCollectionLayout>
  );
};

export default ThemeCollectionPage;
