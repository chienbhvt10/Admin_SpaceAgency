import { PageHeader } from 'antd';
import { CommonPath } from 'commons/base-routes';
import ThemeCollectionLayout from 'commons/components/layouts/ThemesCollection';
import { TypeForm } from 'commons/type';
import { setTitle } from 'helpers/dom';
import ThemesForm from 'modules/ThemesCollection/components/UseForm';
import React from 'react';

const ThemesCreateNew = () => {
  React.useEffect(() => {
    setTitle('Create Themes');
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
    {
      path: CommonPath.THEME_COLLECTION_NEW,
      breadcrumbName: 'Create Themes Collection',
    },
  ];
  return (
    <div>
      <ThemeCollectionLayout>
        <ThemesForm title="Create Themes Collection" type={TypeForm.CREATE} loading={false} />
      </ThemeCollectionLayout>
    </div>
  );
};

export default ThemesCreateNew;
