import { CommonPath } from 'commons/base-routes';
import CustomerSimulationLayout from 'commons/components/layouts/CustomerSimulation';
import PageHeader from 'commons/components/layouts/PageHeader';
import { TypeForm } from 'commons/type';
import { setTitle } from 'helpers/dom';
import CreateCustomerSimulationForm from 'modules/CustomerSimulation/components/customer-simulation-form';
import { useCreateCustomerSimulation } from 'modules/CustomerSimulation/hooks/useCreateCustomerSimulation';
import React from 'react';
import { useNavigate } from 'react-router';

const NewCustomerSimulation = () => {
  const { loading } = useCreateCustomerSimulation();
  const navigate = useNavigate();
  React.useEffect(() => {
    setTitle('Create Customer Simulation');
  });
  const onCancel = () => {
    navigate(CommonPath.USER_SIMULATE_COLLECTION);
  };
  const routes = [
    {
      path: CommonPath.DEFAULT_PATH,
      breadcrumbName: 'Home',
    },
    {
      path: CommonPath.USER_SIMULATE_COLLECTION,
      breadcrumbName: 'User Simulation Collections',
    },
    {
      path: CommonPath.USER_SIMULATE_COLLECTION_NEW,
      breadcrumbName: 'New User Simulation Collections',
    },
  ];
  return (
    <CustomerSimulationLayout>
      <PageHeader title="" breadcrumb={{ routes }} />
      <CreateCustomerSimulationForm
        loading={loading}
        title="Create Customer Simulation"
        type={TypeForm.CREATE}
        onCancel={onCancel}
      />
    </CustomerSimulationLayout>
  );
};

export default NewCustomerSimulation;
