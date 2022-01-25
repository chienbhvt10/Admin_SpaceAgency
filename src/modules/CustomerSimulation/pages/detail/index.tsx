import { CommonPath } from 'commons/base-routes';
import CustomerSimulationLayout from 'commons/components/layouts/CustomerSimulation';
import PageHeader from 'commons/components/layouts/PageHeader';
import { SimulationTypeInput, TypeForm } from 'commons/type';
import { setTitle } from 'helpers/dom';
import UpdateCustomerSimulationForm from 'modules/CustomerSimulation/components/customer-simulation-form';
import { useDetailSimulation } from 'modules/CustomerSimulation/hooks/useDetailSimulation';
import { useUpdateCustomerSimulation } from 'modules/CustomerSimulation/hooks/useUpdateCustomerSimulation';
import React from 'react';
import { useNavigate, useParams } from 'react-router';
interface Props {}

const CustomerSimulationDetail = (props: Props) => {
  let { id } = useParams<'id'>();
  const { loading: loadingUpdate } = useUpdateCustomerSimulation();
  const { dataSimulation, detailSimulation } = useDetailSimulation();
  const navigate = useNavigate();
  const onCancel = () => {
    navigate(CommonPath.USER_SIMULATE_COLLECTION);
  };

  React.useEffect(() => {
    if (id) {
      detailSimulation({
        id,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  React.useEffect(() => {
    setTitle('Simulation Approve');
  });

  const onFinish = (values: SimulationTypeInput) => {
    console.log(values);
  };

  return (
    <CustomerSimulationLayout>
      <PageHeader title="" breadcrumb={{ routes }} />
      <UpdateCustomerSimulationForm
        item={dataSimulation}
        loading={loadingUpdate}
        onFinish={onFinish}
        title="Simulation Approve"
        type={TypeForm.UPDATE}
        onCancel={onCancel}
      />
    </CustomerSimulationLayout>
  );
};

export default CustomerSimulationDetail;
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
