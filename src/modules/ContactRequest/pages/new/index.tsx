import { CommonPath } from 'commons/base-routes';
import PageHeader from 'commons/components/layouts/PageHeader';
import ThemeCollectionLayout from 'commons/components/layouts/ThemesCollection';
import React from 'react';

function RequestsCreateNew() {
  return (
    <ThemeCollectionLayout>
      <PageHeader title="" breadcrumb={{ routes }} />
    </ThemeCollectionLayout>
  );
}

export default RequestsCreateNew;
const routes = [
  {
    path: CommonPath.DEFAULT_PATH,
    breadcrumbName: 'HOME',
  },
  {
    path: CommonPath.CONTACT_REQUEST,
    breadcrumbName: 'Contact Request Collection',
  },
  {
    path: CommonPath.CONTACT_REQUEST_NEW,
    breadcrumbName: 'Create Contact Request',
  },
];
