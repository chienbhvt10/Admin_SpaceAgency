import { CommonPath } from 'commons/base-routes';
import RequestLayout from 'commons/components/layouts/Request';
import PageHeader from 'commons/components/layouts/PageHeader';
import { TypeForm, UpdateRequestStatusInput, UpdateRequestStatusTypeInput } from 'commons/type';
import { setTitle } from 'helpers/dom';
import ContactRequestForm from 'modules/Request/components/request-form';
import { useRequestDetail } from 'modules/Request/hooks/useRequestDetail';
import { useUpdateRequestStatus } from 'modules/Request/hooks/useUpdateRequestStatus';
import React from 'react';
import { useNavigate, useParams } from 'react-router';

const RequestStatusUpdate = () => {
  let { id } = useParams<'id'>();
  const { item, getDetailRequest } = useRequestDetail();
  const navigate = useNavigate();
  const { updateRequestStatus, loading } = useUpdateRequestStatus();
  React.useEffect(() => {
    setTitle('問い合わせ状態の更新');
  }, []);

  React.useEffect(() => {
    if (id) {
      getDetailRequest(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const onFinishUpdateRequestStatus = (values: UpdateRequestStatusTypeInput) => {
    updateRequestStatus({
      id: item?.id || '',
      status: values.status,
    });
  };

  return (
    <RequestLayout>
      <PageHeader title="" breadcrumb={{ routes }} />
      <ContactRequestForm
        title="問い合わせ状態の更新"
        onFinish={onFinishUpdateRequestStatus}
        type={TypeForm.UPDATE}
        item={item}
        loading={loading}
      />
    </RequestLayout>
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
    breadcrumbName: 'お問い合わせ一覧',
  },
  {
    path: CommonPath.CONTACT_REQUEST_DETAIL,
    breadcrumbName: '問い合わせ状態の更新',
  },
];
