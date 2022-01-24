import { CommonPath } from 'commons/base-routes';
import PageHeader from 'commons/components/layouts/PageHeader';
import ThemeCollectionLayout from 'commons/components/layouts/ThemesCollection';
import { CreateThemeTypeInput, TypeForm } from 'commons/type';
import { CurrencyUnit } from 'graphql/generated/graphql';
import { setTitle } from 'helpers/dom';
import ThemesForm from 'modules/ThemesCollection/components/ThemeForm';
import { useCreateThemes } from 'modules/ThemesCollection/hooks/useCreateThemes';
import { CreateTypeInput } from 'modules/ThemesCollection/redux/action-types';
import React from 'react';

const ThemesCreateNew = () => {
  const { createTheme, loading } = useCreateThemes();

  React.useEffect(() => {
    setTitle('Create Themes');
  }, []);

  const onFinishCreateTheme = (values: CreateThemeTypeInput) => {
    const variables: CreateTypeInput = {
      titleCategory: values.nameEnglish,
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
        <ThemesForm
          onFinish={onFinishCreateTheme}
          loading={loading}
          title="Create Themes Collection"
          type={TypeForm.CREATE}
        />
      </ThemeCollectionLayout>
    </div>
  );
};

export default ThemesCreateNew;
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
