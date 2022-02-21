import { Col, Form, FormItemProps, FormProps, Input, Radio, Row, Select } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import Title from 'antd/lib/typography/Title';
import { TypeForm } from 'commons/type';
import { IRequest, RequestStatus, UpdateRequestStatusVariables } from 'graphql/generated/graphql';
import { useUpdateRequestStatus } from 'modules/ContactRequest/hooks/useUpdateRequestStatus';
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
  onFinish?: (values: UpdateRequestStatusVariables) => void;
}

function ContactRequestForm(props: IProps) {
  const { loading, item, onCancel, onChange, title, type, onFinish } = props;
  const { updateRequestStatus } = useUpdateRequestStatus();
  const [form] = Form.useForm<IRequest>();

  React.useEffect(() => {
    if (item && type === TypeForm.UPDATE) {
      form.setFieldsValue({
        email: item.email || '',
        address: item.address || '',
        furigana: item.furigana || '',
        phone: item.phone || '',
        requesterFullName: item.requesterFullName || '',
        content: item.content || '',
        hasLand: item.hasLand || false,
        postcode: item.postcode || '',
        type: item.type,
        status: item.status,
      });
    }
  }, [type, form, item]);
  React.useEffect(() => {
    if (item) {
      form.setFieldsValue(item);
    }
  }, [form, item]);
  const onFinishFailed = () => {};
  const onDone = () => {
    form.setFieldsValue({
      ...item,
      status: RequestStatus.Open,
    });
  };
  const onReject = () => {
    form.setFieldsValue({
      ...item,
      status: RequestStatus.Rejected,
    });
  };
  const onApprove = () => {
    form.setFieldsValue({
      ...item,
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
                label={<Title level={5}>Requester FullName</Title>}
                name="氏名"
                {...tailLayout}
              >
                <Input disabled />
              </Form.Item>
              <Form.Item
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 14 }}
                label={<Title level={5}>Furigana</Title>}
                name="furigana"
                {...tailLayout}
              >
                <Input disabled />
              </Form.Item>
              <Form.Item
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 14 }}
                label={<Title level={5}>Phone</Title>}
                name="phone"
                {...tailLayout}
              >
                <Input disabled />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 14 }}
                label={<Title level={5}>Status</Title>}
                name="status"
                {...tailLayout}
              >
                <Input disabled />
              </Form.Item>
              <Form.Item
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 14 }}
                label={<Title level={5}>Type</Title>}
                name="type"
                {...tailLayout}
              >
                <Input disabled />
              </Form.Item>
              <Form.Item
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 14 }}
                label={<Title level={5}>Postcode</Title>}
                name="postcode"
                {...tailLayout}
              >
                <Input disabled />
              </Form.Item>
              <Form.Item
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 14 }}
                label={<Title level={5}>Address</Title>}
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
