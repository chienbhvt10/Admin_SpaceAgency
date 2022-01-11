import { CommonPath } from 'commons/base-routes';
import CustomerSimulationLayout from 'commons/components/layouts/CustomerSimulation';
import PageHeader from 'commons/components/layouts/PageHeader';
import { setTitle } from 'helpers/dom';
import useListCustomerSimulation from 'modules/CustomerSimulation/hooks/useListCustomerSimulation';
import React from 'react';
import { useNavigate } from 'react-router';
import CustomerSimulationTable from './Table';

const CustomerSimulationPage = () => {
  const { items, loading } = useListCustomerSimulation();
  const navigate = useNavigate();
  React.useEffect(() => {
    setTitle('Customer Simulation Collections');
  });
  const rowKey = (item: any) => `${item._id}`;
  const handleAdd = () => {
    navigate(CommonPath.USER_SIMULATE_COLLECTION_NEW);
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
  ];
  const onChange = () => {};
  return (
    <CustomerSimulationLayout>
      <PageHeader title="" breadcrumb={{ routes }}></PageHeader>
      <CustomerSimulationTable
        rowKey={rowKey}
        handleAdd={handleAdd}
        items={items}
        loading={loading}
        onChange={onChange}
      />
    </CustomerSimulationLayout>
  );
};

export default CustomerSimulationPage;
