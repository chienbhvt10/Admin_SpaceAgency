import { CommonPath } from 'commons/base-routes';
import ThemeCollectionLayout from 'commons/components/layouts/ThemesCollection';
import { CreateThemeTypeInput, TypeForm } from 'commons/type';
import { setTitle } from 'helpers/dom';
import React from 'react';
import ThemesForm from 'modules/ThemesCollection/components/ThemeForm';
import { useDetailTheme } from 'modules/ThemesCollection/hooks/useDetailTheme';
import { useParams } from 'react-router';
import { useUpdateThemes } from 'modules/ThemesCollection/hooks/useUpdateThemes';
import { UpdateTypeInput } from 'modules/ThemesCollection/redux/action-types';
import { CurrencyUnit } from 'graphql/generated/graphql';
import PageHeader from 'commons/components/layouts/PageHeader';

function ThemesUpdate() {
  let { id } = useParams<'id'>();
  const { getDetailTheme, items } = useDetailTheme();
  const { updateTheme, loading } = useUpdateThemes();
  React.useEffect(() => {
    if (id) {
      getDetailTheme({ id });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  React.useEffect(() => {
    setTitle('Update Themes');
  }, []);

  const onFinishUpdateTheme = (values: CreateThemeTypeInput) => {
    const variables: UpdateTypeInput = {
      idCategory: (items && items.themeCategories && items?.themeCategories[0].id) || '',
      titleCategory: values.nameEnglish || '',
      updateThemeInput: {
        id: items?.id || '',
        code3D: values?.code || '',
        description: values.description,
        price: {
          unit: CurrencyUnit.Jpy,
          value: values.price,
        },
        title: values.name,
      },
    };
    updateTheme(variables);
  };
  return (
    <div>
      <ThemeCollectionLayout>
        <PageHeader title="" breadcrumb={{ routes }} />
        <ThemesForm
          onFinish={onFinishUpdateTheme}
          title="Update Themes Collection"
          type={TypeForm.UPDATE}
          items={items}
          loading={loading}
        />
      </ThemeCollectionLayout>
    </div>
  );
}
export default ThemesUpdate;

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
