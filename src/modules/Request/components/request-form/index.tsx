import { Col, Form, FormItemProps, FormProps, Input, Radio, Row, Select } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import Title from 'antd/lib/typography/Title';
import { TypeForm, UpdateRequestStatusTypeInput } from 'commons/type';
import { IRequest, RequestStatus, UpdateRequestStatusVariables } from 'graphql/generated/graphql';
import { useUpdateRequestStatus } from 'modules/Request/hooks/useUpdateRequestStatus';
import React from 'react';
import FormHeader from '../form-header';

const layout: FormProps = {
  layout: 'horizontal',
};
const { Option } = Select;
const tailLayout: FormItemProps = {};

interface IProps {
  title: string;
  loading: boolean;
  item?: IRequest;
  type: TypeForm;
  onCancel?(): void;
  onChange?(): void;
  onFinish?: (values: UpdateRequestStatusTypeInput) => void;
}

function ContactRequestForm(props: IProps) {
  const { loading, item, onCancel, onChange, title, type, onFinish } = props;
  const { updateRequestStatus } = useUpdateRequestStatus();
  const [form] = Form.useForm<UpdateRequestStatusTypeInput>();

  const updateRequestVariables = {
    email: item?.email || '',
    address: item?.address || '',
    furigana: item?.furigana || '',
    phone: item?.phone || '',
    requesterFullName: item?.requesterFullName || '',
    content: item?.content || '',
    hasLand: item?.hasLand ? '持っている' : 'まだ決まっていない',
    postcode: item?.postcode || '',
    type: item?.type,
    status: item?.status,
  };
  React.useEffect(() => {
    if (item && type === TypeForm.UPDATE) {
      form.setFieldsValue(updateRequestVariables);
    }
  }, [type, form, item]);
  // React.useEffect(() => {
  //   if (item) {
  //     form.setFieldsValue(item);
  //   }
  // }, [form, item]);
  const onFinishFailed = () => {};
  const onDone = () => {
    form.setFieldsValue({
      ...updateRequestVariables,
      status: RequestStatus.Open,
    });
  };
  const onReject = () => {
    form.setFieldsValue({
      ...updateRequestVariables,
      status: RequestStatus.Rejected,
    });
  };
  const onApprove = () => {
    form.setFieldsValue({
      ...updateRequestVariables,
      status: RequestStatus.Accepted,
    });
  };
  return (
    <>
      <Form
        {...layout}
        name="basic"
        initialValues={{
          ...props.item,
        }}
        form={form}
        onValuesChange={onChange}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <FormHeader
          title={<Title level={2}>{title}</Title>}
          loading={loading}
          onDone={onDone}
          onReject={onReject}
          onApprove={onApprove}
        >
          <Row>
            <Col span={12}>
              <Form.Item
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 14 }}
                label={<Title level={5}>Eメール</Title>}
                name="email"
                {...tailLayout}
              >
                <Input disabled />
              </Form.Item>
              <Form.Item
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 14 }}
                label={<Title level={5}>氏名</Title>}
                name="requesterFullName"
                {...tailLayout}
              >
                <Input disabled />
              </Form.Item>
              <Form.Item
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 14 }}
                label={<Title level={5}>フリガナ</Title>}
                name="furigana"
                {...tailLayout}
              >
                <Input disabled />
              </Form.Item>
              <Form.Item
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 14 }}
                label={<Title level={5}>電話番号</Title>}
                name="phone"
                {...tailLayout}
              >
                <Input disabled />
              </Form.Item>
              <Form.Item
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 14 }}
                label={<Title level={5}>持っている。</Title>}
                name="hasLand"
                {...tailLayout}
              >
                <Input disabled />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 14 }}
                label={<Title level={5}>状態</Title>}
                name="status"
                {...tailLayout}
              >
                <Input disabled />
              </Form.Item>
              <Form.Item
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 14 }}
                label={<Title level={5}>タイプ</Title>}
                name="type"
                {...tailLayout}
              >
                <Input disabled />
              </Form.Item>
              <Form.Item
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 14 }}
                label={<Title level={5}>郵便番号</Title>}
                name="postcode"
                {...tailLayout}
              >
                <Input disabled />
              </Form.Item>
              <Form.Item
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 14 }}
                label={<Title level={5}>住所</Title>}
                name="address"
                {...tailLayout}
              >
                <TextArea disabled />
              </Form.Item>
            </Col>
          </Row>
        </FormHeader>
      </Form>
    </>
  );
}

export default ContactRequestForm;
