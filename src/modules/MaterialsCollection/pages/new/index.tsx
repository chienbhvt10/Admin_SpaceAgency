import { CommonPath } from 'commons/base-routes';
import MaterialCollectionLayout from 'commons/components/layouts/MaterialCollection';
import PageHeader from 'commons/components/layouts/PageHeader';
import { CreateMaterialsTypeInput, TypeForm } from 'commons/type';
import { CurrencyUnit } from 'graphql/generated/graphql';
import { setTitle } from 'helpers/dom';
import MaterialForm from 'modules/MaterialsCollection/components/UseForm';
import { useCreateMaterials } from 'modules/MaterialsCollection/hooks/useCreateMaterials';
import React from 'react';

const MaterialCreateNew = () => {
  const { createMaterials, loading } = useCreateMaterials();

  React.useEffect(() => {
    setTitle('Create Material');
  }, []);

  const onFinish = (values: CreateMaterialsTypeInput) => {
    createMaterials({
      createMaterialInput: {
        title: values.name,
        materialTypes: [
          {
            title: values.nameStandard,
            code3d: values.codeStandard,
            price: {
              unit: CurrencyUnit.Jpy,
              value: values.priceStandard,
            },
            material: {
              id: values.themeId || '',
            },
            previewImageUrl: values.imagePreview,
          },
          {
            title: values.namePremium,
            code3d: values.codePremium,
            price: {
              unit: CurrencyUnit.Jpy,
              value: values.pricePremium,
            },
            material: {
              id: values.themeId || '',
            },
            previewImageUrl: values.imagePreview2,
          },
        ],
        style: {
          id: values.styleId || '',
        },
      },
    });
  };
  const routes = [
    {
      path: CommonPath.DEFAULT_PATH,
      breadcrumbName: 'Home',
    },
    {
      path: CommonPath.MATERIAL_COLLECTION,
      breadcrumbName: 'Material Collection',
    },
    {
      path: CommonPath.MATERIAL_COLLECTION_NEW,
      breadcrumbName: 'Create Material Collection',
    },
  ];
  return (
    <div>
      <MaterialCollectionLayout>
        <PageHeader title="" breadcrumb={{ routes }} />
        <MaterialForm title="Create Material Collection" type={TypeForm.CREATE} loading={loading} onFinish={onFinish} />
      </MaterialCollectionLayout>
    </div>
  );
};

export default MaterialCreateNew;
