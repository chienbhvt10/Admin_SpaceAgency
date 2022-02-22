import { CommonPath } from 'commons/base-routes';
import ContactRequestLayout from 'commons/components/layouts/ContactRequest';
import PageHeader from 'commons/components/layouts/PageHeader';
import { TypeForm, UpdateRequestStatusInput } from 'commons/type';
import { setTitle } from 'helpers/dom';
import ContactRequestForm from 'modules/ContactRequest/components/contact-request-form';
import { useRequestDetail } from 'modules/ContactRequest/hooks/useRequestDetail';
import { useUpdateRequestStatus } from 'modules/ContactRequest/hooks/useUpdateRequestStatus';
import React from 'react';
import { useNavigate, useParams } from 'react-router';

const RequestStatusUpdate = () => {
  let { id } = useParams<'id'>();
  const { item, getDetailRequest } = useRequestDetail();
  const navigate = useNavigate();
  const { updateRequestStatus, loading } = useUpdateRequestStatus();
  React.useEffect(() => {
    setTitle('Contact Request Detail');
  }, []);

  React.useEffect(() => {
    if (id) {
      getDetailRequest(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const onFinishUpdateRequestStatus = (values: UpdateRequestStatusInput) => {
    updateRequestStatus({
      id: item?.id || '',
      status: values.status,
    });
  };

  return (
    <ContactRequestLayout>
      <PageHeader title="" breadcrumb={{ routes }} />
      <ContactRequestForm
        title="Update Request Status"
        onFinish={onFinishUpdateRequestStatus}
        type={TypeForm.UPDATE}
        item={item}
        loading={loading}
      />
    </ContactRequestLayout>
  );
};

export default RequestStatusUpdate;
const routes = [
  {
    path: CommonPath.DEFAULT_PATH,
    breadcrumbName: 'HOME',
  },
  {
    path: CommonPath.CONTACT_REQUEST,
    breadcrumbName: 'スタイル一覧',
  },
  {
    path: CommonPath.CONTACT_REQUEST_DETAIL,
    breadcrumbName: 'Update Contact Request',
  },
];
