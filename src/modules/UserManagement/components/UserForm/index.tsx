import { Button, Col, Form, FormItemProps, FormProps, Input, Row, Space } from 'antd';
import UploadDragger from 'commons/components/layouts/Form-editor/UploadDragger';
import { TypeForm } from 'commons/type';
import { CreateUserInput, IUsersFields, UpdateUserInput } from 'graphql/generated/graphql';
import { useCreateUser } from 'modules/UserManagement/hooks/useCreateUser';
import { useUpdateUser } from 'modules/UserManagement/hooks/useUpdateUser';
import React from 'react';
import { useDispatch } from 'react-redux';
const layout: FormProps = {
  layout: 'vertical',
  labelCol: { span: 20 },
  wrapperCol: { span: 20 },
};
const tailLayout: FormItemProps = {};

interface IProps {
  loading: boolean;
  item?: IUsersFields;
  type: TypeForm;
  onCancel?(): void;
  onChange?(): void;
}
const requireRule = { required: true, message: 'This is required information!' };
const requireEmail = {
  required: true,
  type: 'email',
  message: 'The input is not valid E-mail!',
};

function UserForm(props: IProps) {
  const { loading, item, onCancel, onChange } = props;
  const { updateUser } = useUpdateUser();
  const { createUser } = useCreateUser();
  const [form] = Form.useForm<IUsersFields>();
  const inputCreate: CreateUserInput = {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    firstNameF: '',
    lastNameF: '',
    address: '',
    phone: '',
  };
  const [createInput, setCreateUserInput] = React.useState<CreateUserInput>(inputCreate);
  const [updateInput, setUpdateUserInput] = React.useState<UpdateUserInput>({
    id: '',
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    firstNameF: '',
    lastNameF: '',
    phone: '',
  });

  React.useEffect(() => {
    if (item) {
      setUpdateUserInput({
        id: item.id,
        email: item.email,
        firstName: item.firstName,
        lastName: item.lastName,
        address: item.address,
        firstNameF: item.firstNameF,
        lastNameF: item.lastNameF,
        phone: item.phone,
      });
    }
  }, [item]);
  React.useEffect(() => {
    if (item) {
      form.setFieldsValue(item);
    }
  }, [form, item]);
  const onFinish = (values: IUsersFields) => {
    if (props.type === TypeForm.UPDATE) {
      const updateUserInput: UpdateUserInput = {
        ...updateInput,
        email: values.email || '',
        firstName: values.firstName || '',
        lastName: values.lastName || '',
        address: values.address || '',
        firstNameF: values.firstNameF || '',
        lastNameF: values.lastNameF || '',
        phone: values.phone || '',
      };
      updateUser({ updateUserInput });
    }
    if (props.type === TypeForm.CREATE) {
      const createUserInput: CreateUserInput = {
        ...createInput,
        email: values.email || '',
        firstName: values.firstName || '',
        lastName: values.lastName || '',
        address: values.address || '',
        firstNameF: values.firstNameF || '',
        lastNameF: values.lastNameF || '',
        phone: values.phone || '',
      };
      createUser({ createUserInput });
    }
  };
  const onFinishFailed = () => {};
  const handleChangePassword = (e: any) => {
    if (props.type === TypeForm.CREATE) {
      setCreateUserInput({
        ...createInput,
        password: e.target.value,
      });
    }
  };
  return (
    <>
      <Form
        {...layout}
        name="basic"
        initialValues={{
          ...props.item,
          users: [{}],
        }}
        form={form}
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
                  <Input />
                </Form.Item>
              </Col>
              {props.type === TypeForm.CREATE && (
                <Col span={12}>
                  <Form.Item label="Password" name="password" rules={[requireRule]} {...tailLayout}>
                    <Input onChange={handleChangePassword} />
                  </Form.Item>
                </Col>
              )}
              <Col span={12}>
                <Form.Item label="First Name" name="firstName" rules={[requireRule]} {...tailLayout}>
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="First Name F" name="firstNameF" rules={[requireRule]} {...tailLayout}>
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Last Name" name="lastName" rules={[requireRule]} {...tailLayout}>
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Last Name F" name="lastNameF" rules={[requireRule]} {...tailLayout}>
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Phone" name="phone" {...tailLayout}>
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Address" name="address" rules={[requireRule]} {...tailLayout}>
                  <Input />
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

export default UserForm;
