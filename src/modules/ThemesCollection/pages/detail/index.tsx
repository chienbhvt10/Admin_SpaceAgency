import { CommonPath } from 'commons/base-routes';
import ThemeCollectionLayout from 'commons/components/layouts/ThemesCollection';
import { TypeForm } from 'commons/type';
import { setTitle } from 'helpers/dom';
import React from 'react';
import ThemesForm from 'modules/ThemesCollection/components/ThemeForm';
import { useDetailTheme } from 'modules/ThemesCollection/hooks/useDetailTheme';
import { useParams } from 'react-router';
import { PageHeader } from 'antd';

function ThemesUpdate() {
  let { id } = useParams<'id'>();
  const { getDetailTheme, loading, items } = useDetailTheme();
  React.useEffect(() => {
    if (id) {
      getDetailTheme({ id });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  React.useEffect(() => {
    setTitle('Update Themes');
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
      path: CommonPath.THEME_COLLECTION_UPDATE,
      breadcrumbName: 'Update Themes Collection',
    },
  ];
  return (
    <div>
      <ThemeCollectionLayout>
        <PageHeader title="Detail Theme" breadcrumb={{ routes }} />
        <ThemesForm title="Update Themes Collection" type={TypeForm.UPDATE} items={items} loading={loading} />
      </ThemeCollectionLayout>
    </div>
  );
}

export default ThemesUpdate;
