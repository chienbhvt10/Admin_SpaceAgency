import { TablePaginationConfig } from 'antd';
import { CommonPath } from 'commons/base-routes';
import CustomerSimulationLayout from 'commons/components/layouts/CustomerSimulation';
import PageHeader from 'commons/components/layouts/PageHeader';
import { ISimulation } from 'graphql/generated/graphql';
import { setTitle } from 'helpers/dom';
import { useListSimulations } from 'modules/CustomerSimulation/hooks/useListCustomerSimulation';
import React from 'react';
import { useNavigate } from 'react-router';
import CustomerSimulationTable from './Table';

const CustomerSimulationPage = () => {
  const { dataSimulations, loading, paginationTable } = useListSimulations();
  const navigate = useNavigate();
  React.useEffect(() => {
    setTitle('Customer Simulation Collections');
  });
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
  const onDelete = (record: ISimulation) => () => {};
  const onEdit = (record: ISimulation) => () => {};
  const onChange = (pagination: TablePaginationConfig, __: any, sorter: any) => {};
  return (
    <CustomerSimulationLayout>
      <PageHeader title="" breadcrumb={{ routes }}></PageHeader>
      <CustomerSimulationTable
        onDelete={onDelete}
        onEdit={onEdit}
        items={dataSimulations}
        loading={loading}
        pagination={paginationTable}
        onChange={onChange}
      />
    </CustomerSimulationLayout>
  );
};

export default CustomerSimulationPage;
