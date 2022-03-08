import { CommonPath } from 'commons/base-routes';
import PageHeader from 'commons/components/layouts/PageHeader';
import ThemeCollectionLayout from 'commons/components/layouts/ThemesCollection';
import { ThemeTypeInput, TypeForm } from 'commons/type';
import { CurrencyUnit } from 'graphql/generated/graphql';
import { setTitle } from 'helpers/dom';
import ThemesForm from 'modules/ThemesCollection/components/ThemeForm';
import { useCreateThemes } from 'modules/ThemesCollection/hooks/useCreateThemes';
import { CreateThemeInputType } from 'modules/ThemesCollection/redux/action-types';
import React from 'react';

const ThemesCreateNew = () => {
  const { createTheme, loading } = useCreateThemes();

  React.useEffect(() => {
    setTitle('タイプ一覧');
  }, []);

  const onFinishCreateTheme = (values: ThemeTypeInput) => {
    const variables: CreateThemeInputType = {
      titleCategory: values.nameEnglish,
      insidePreviewUrl: values.insidePreviewUrl,
      outsidePreviewUrl: values.outsidePreviewUrl,
      diagramImageUrl: values.diagramImageUrl,
      createThemeInput: {
        title: values.name,
        code3D: values.code,
        price: {
          unit: CurrencyUnit.Jpy,
          value: values.price,
        },
        description: values.description,
      },
    };
    createTheme(variables);
  };
  return (
    <div>
      <ThemeCollectionLayout>
        <PageHeader title="" breadcrumb={{ routes }} />
        <ThemesForm onFinish={onFinishCreateTheme} loading={loading} title="タイプ追加" type={TypeForm.CREATE} />
      </ThemeCollectionLayout>
    </div>
  );
};

export default ThemesCreateNew;
const routes = [
  {
    path: CommonPath.DEFAULT_PATH,
    breadcrumbName: 'HOME',
  },
  {
    path: CommonPath.THEME_COLLECTION,
    breadcrumbName: 'タイプ一覧',
  },
  {
    path: CommonPath.THEME_COLLECTION_NEW,
    breadcrumbName: 'タイプ追加',
  },
];
