import { CommonPath } from 'commons/base-routes';
import PageHeader from 'commons/components/layouts/PageHeader';
import StyleCollectionLayout from 'commons/components/layouts/StylesCollection';
import { TypeForm } from 'commons/type';
import { setTitle } from 'helpers/dom';
import CreateStyleForm from 'modules/StylesCollection/components/StyleForm';
import { useCreateStyle } from 'modules/StylesCollection/hooks/useCreateStyle';
import React from 'react';
import { useNavigate } from 'react-router';
const NewStyleCollection = () => {
  const { loading } = useCreateStyle();
  const navigate = useNavigate();
  React.useEffect(() => {
    setTitle('Create Style');
  });
  const onCancel = () => {
    navigate(CommonPath.STYLES_COLLECTION);
  };
  const routes = [
    {
      path: CommonPath.DEFAULT_PATH,
      breadcrumbName: 'Home',
    },
    {
      path: CommonPath.STYLES_COLLECTION,
      breadcrumbName: 'Style Collection',
    },
    {
      path: CommonPath.STYLES_COLLECTION_NEW,
      breadcrumbName: 'Create Style Collection',
    },
  ];
  return (
    <StyleCollectionLayout>
      <PageHeader title="" breadcrumb={{ routes }} />
      <CreateStyleForm onCancel={onCancel} title="Create Style Collection" type={TypeForm.CREATE} loading={loading} />
    </StyleCollectionLayout>
  );
};

export default NewStyleCollection;
