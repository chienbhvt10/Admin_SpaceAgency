import { CommonPath } from 'commons/base-routes';
import ThemeCollectionLayout from 'commons/components/layouts/ThemesCollection'
import { TypeForm } from 'commons/type'
import { setTitle } from 'helpers/dom';
import React from 'react'
import { useCreateUser } from 'modules/UserManagement/hooks/useCreateUser'
import ThemesForm from 'modules/ThemesCollection/components/UseForm';

function ThemesUpdate() {
    const { loading } = useCreateUser();
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
                <ThemesForm title="Update Themes Collection" type={TypeForm.CREATE} loading={loading} />
            </ThemeCollectionLayout>
        </div>
    )
}

export default ThemesUpdate
