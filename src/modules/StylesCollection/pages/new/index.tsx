import { CommonPath } from 'commons/base-routes';
import PageHeader from 'commons/components/layouts/PageHeader';
import StyleCollectionLayout from 'commons/components/layouts/StylesCollection';
import { CreateStyleTypeInput, TypeForm } from 'commons/type';
import { CurrencyUnit } from 'graphql/generated/graphql';
import { setTitle } from 'helpers/dom';
import CreateStyleForm from 'modules/StylesCollection/components/StyleForm';
import { useCreateStyle } from 'modules/StylesCollection/hooks/useCreateStyle';
import React from 'react';
import { useNavigate } from 'react-router';
const NewStyleCollection = () => {
  const { loading } = useCreateStyle();
  const navigate = useNavigate();
  const { createStyle } = useCreateStyle();

  React.useEffect(() => {
    setTitle('デザイン追加');
  });

  const onCancel = () => {
    navigate(CommonPath.STYLES_COLLECTION);
  };

  const onFinishCreateStyle = (values: CreateStyleTypeInput) => {
    createStyle({
      createStyleInput: {
        previewImageUrl: values.previewImageUrl,
        title: values.title || '',
        code3d: values.code3d || '',
        description: values.description || '',
        price: {
          unit: CurrencyUnit.Jpy,
          value: values.price,
        },
        theme: {
          id: values.themeId,
        },
      },
    });
  };

  return (
    <StyleCollectionLayout>
      <PageHeader title="" breadcrumb={{ routes }} />
      <CreateStyleForm
        onFinish={onFinishCreateStyle}
        onCancel={onCancel}
        title="デザイン追加"
        type={TypeForm.CREATE}
        loading={loading}
      />
    </StyleCollectionLayout>
  );
};

export default NewStyleCollection;
const routes = [
  {
    path: CommonPath.DEFAULT_PATH,
    breadcrumbName: 'Home',
  },
  {
    path: CommonPath.STYLES_COLLECTION,
    breadcrumbName: 'デザイン一覧',
  },
  {
    path: CommonPath.STYLES_COLLECTION_NEW,
    breadcrumbName: 'デザイン追加',
  },
];
