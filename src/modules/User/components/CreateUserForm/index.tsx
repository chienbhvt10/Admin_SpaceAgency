import React from 'react';
import { Button, Col, DatePicker, Divider, Form, FormItemProps, FormProps, Input, Row, Select, Space } from 'antd';
import { CreateUserInput, RolesName, Users } from 'graphql/generated/graphql';
import UploadDragger from 'commons/components/layouts/Form-editor/UploadDragger';
const layout: FormProps = {
  layout: 'vertical',
  labelCol: { span: 20 },
  wrapperCol: { span: 20 },
};
const tailLayout: FormItemProps = {};

interface IProps {
  loading: boolean;
  item?: Users;
  onSave?(data: CreateUserInput): void;
  onCancel?(): void;
  onChange?(): void;
}
const requireRule = { required: true, message: 'This is required information!' };
const requireEmail = {
  required: true,
  type: 'email',
  message: 'The input is not valid E-mail!',
};

function CreateUserForm(props: IProps) {
  const { loading, item, onSave, onCancel, onChange } = props;
  const input: CreateUserInput = {
    email: '',
    name: '',
    password: '',
    role: RolesName.Admin,
    address: '',
    firstName: '',
    lastName: '',
    phone: '',
  };
  const [dataInput, setDataInput] = React.useState<CreateUserInput>(input);
  const onFinish = () => {
    console.log(dataInput);
  };
  const onFinishFailed = () => {};
  const handleChangeEmail = (e: any) => {
    setDataInput({
      ...dataInput,
      email: e.target.value,
    });
  };
  const handleChangePassword = (e: any) => {
    setDataInput({
      ...dataInput,
      password: e.target.value,
    });
  };
  const handleChangePhone = (e: any) => {
    setDataInput({
      ...dataInput,
      phone: e.target.value,
    });
  };
  const handleChangeAddress = (e: any) => {
    setDataInput({
      ...dataInput,
      address: e.target.value,
    });
  };
  const handleChangeName = (e: any) => {
    setDataInput({
      ...dataInput,
      name: e.target.value,
    });
  };
  const handleChangeFirstName = (e: any) => {
    setDataInput({
      ...dataInput,
      firstName: e.target.value,
    });
  };
  const handleChangeLastName = (e: any) => {
    setDataInput({
      ...dataInput,
      lastName: e.target.value,
    });
  };
  return (
    <>
      <Form
        {...layout}
        name="basic"
        initialValues={{
          ...props.item,
          blogs: [{}],
        }}
        onValuesChange={onChange}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Row>
          <Col span={16}>
            <Row>
              <Col span={12}>
                <Form.Item label="Email" name="email" rules={[requireRule, requireEmail]} {...tailLayout}>
                  <Input onChange={handleChangeEmail} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Name" name="name" rules={[requireRule]} {...tailLayout}>
                  <Input onChange={handleChangeName} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Password" name="password" rules={[requireRule]} {...tailLayout}>
                  <Input onChange={handleChangePassword} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="First Name" name="firstName" {...tailLayout}>
                  <Input onChange={handleChangeFirstName} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Last Name" name="lastName" {...tailLayout}>
                  <Input onChange={handleChangeLastName} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Phone" name="phone" {...tailLayout}>
                  <Input onChange={handleChangePhone} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Address" name="address" rules={[requireRule]} {...tailLayout}>
                  <Input onChange={handleChangeAddress} />
                </Form.Item>
              </Col>
            </Row>
          </Col>
          <Col span={8}>
            <UploadDragger />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item {...tailLayout}>
              <Space>
                <Button type="primary" htmlType="submit" loading={loading}>
                  Save
                </Button>
                <Button type="ghost" disabled={loading} onClick={onCancel}>
                  Close
                </Button>
              </Space>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default CreateUserForm;
