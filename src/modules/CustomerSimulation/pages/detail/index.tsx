import { CommonPath } from 'commons/base-routes';
import CustomerSimulationLayout from 'commons/components/layouts/CustomerSimulation';
import PageHeader from 'commons/components/layouts/PageHeader';
import { TypeForm } from 'commons/type';
import { setTitle } from 'helpers/dom';
import UpdateCustomerSimulationForm from 'modules/CustomerSimulation/components/customer-simulation-form';
import { useCustomerSimulationDetail } from 'modules/CustomerSimulation/hooks/useCustomerSimulationDetail';
import { useUpdateCustomerSimulation } from 'modules/CustomerSimulation/hooks/useUpdateCustomerSimulation';
import React from 'react';
import { useNavigate, useParams } from 'react-router';
interface Props {}

const CustomerSimulationDetail = (props: Props) => {
  let { id } = useParams<'id'>();
  const { item } = useCustomerSimulationDetail(id);
  const { loading: loadingUpdate } = useUpdateCustomerSimulation();
  const navigate = useNavigate();
  const onCancel = () => {
    navigate(CommonPath.USER_SIMULATE_COLLECTION);
  };
  React.useEffect(() => {
    setTitle('Simulation Approve');
  });
  const routes = [
    {
      path: CommonPath.DEFAULT_PATH,
      breadcrumbName: 'Home',
    },
    {
      path: CommonPath.USER_SIMULATE_COLLECTION,
      breadcrumbName: 'Customer Simulation',
    },
    {
      path: CommonPath.USER_SIMULATE_COLLECTION_DETAIL,
      breadcrumbName: 'Customer Simulation Detail',
    },
  ];
  return (
    <CustomerSimulationLayout>
      <PageHeader title="" breadcrumb={{ routes }} />
      <UpdateCustomerSimulationForm
        item={item}
        loading={loadingUpdate}
        title="Simulation Approve"
        type={TypeForm.UPDATE}
        onCancel={onCancel}
      />
    </CustomerSimulationLayout>
  );
};

export default CustomerSimulationDetail;
