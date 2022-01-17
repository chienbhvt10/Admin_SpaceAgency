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
  const [createUserInput, setCreateUserInput] = React.useState<CreateUserInput>(inputCreate);
  const [updateUserInput, setUpdateUserInput] = React.useState<UpdateUserInput>({
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
  const onFinish = () => {
    if (props.type === TypeForm.UPDATE) {
      updateUser({ updateUserInput });
    }
    if (props.type === TypeForm.CREATE) {
      createUser({ createUserInput });
    }
  };
  const onFinishFailed = () => {};
  const handleChangeEmail = (e: any) => {
    if (props.type === TypeForm.CREATE) {
      setCreateUserInput({
        ...createUserInput,
        email: e.target.value,
      });
    }
    if (props.type === TypeForm.UPDATE) {
      setUpdateUserInput({
        ...updateUserInput,
        email: e.target.value,
      });
    }
  };
  const handleChangePassword = (e: any) => {
    if (props.type === TypeForm.CREATE) {
      setCreateUserInput({
        ...createUserInput,
        password: e.target.value,
      });
    }
  };
  const handleChangePhone = (e: any) => {
    if (props.type === TypeForm.CREATE) {
      setCreateUserInput({
        ...createUserInput,
        phone: e.target.value,
      });
    }
    if (props.type === TypeForm.UPDATE) {
      setCreateUserInput({
        ...createUserInput,
        phone: e.target.value,
      });
    }
  };
  const handleChangeAddress = (e: any) => {
    if (props.type === TypeForm.CREATE) {
      setCreateUserInput({
        ...createUserInput,
        address: e.target.value,
      });
    }
    if (props.type === TypeForm.UPDATE) {
      setCreateUserInput({
        ...createUserInput,
        address: e.target.value,
      });
    }
  };
  const handleChangeFirstNameF = (e: any) => {
    if (props.type === TypeForm.CREATE) {
      setCreateUserInput({
        ...createUserInput,
        firstNameF: e.target.value,
      });
    }
    if (props.type === TypeForm.UPDATE) {
      setCreateUserInput({
        ...createUserInput,
        firstNameF: e.target.value,
      });
    }
  };
  const handleChangeLastNameF = (e: any) => {
    if (props.type === TypeForm.CREATE) {
      setCreateUserInput({
        ...createUserInput,
        lastNameF: e.target.value,
      });
    }
    if (props.type === TypeForm.UPDATE) {
      setCreateUserInput({
        ...createUserInput,
        lastNameF: e.target.value,
      });
    }
  };
  const handleChangeFirstName = (e: any) => {
    if (props.type === TypeForm.CREATE) {
      setCreateUserInput({
        ...createUserInput,
        firstName: e.target.value,
      });
    }
    if (props.type === TypeForm.UPDATE) {
      setUpdateUserInput({
        ...updateUserInput,
        firstName: e.target.value,
      });
    }
  };
  const handleChangeLastName = (e: any) => {
    if (props.type === TypeForm.CREATE) {
      setCreateUserInput({
        ...createUserInput,
        lastName: e.target.value,
      });
    }
    if (props.type === TypeForm.UPDATE) {
      setUpdateUserInput({
        ...updateUserInput,
        lastName: e.target.value,
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
                  <Input onChange={handleChangeEmail} />
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
                <Form.Item label="First Name" name="firstName" {...tailLayout}>
                  <Input onChange={handleChangeFirstName} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="First Name F" name="firstNameF" {...tailLayout}>
                  <Input onChange={handleChangeFirstNameF} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Last Name" name="lastName" {...tailLayout}>
                  <Input onChange={handleChangeLastName} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Last Name F" name="lastNameF" {...tailLayout}>
                  <Input onChange={handleChangeLastNameF} />
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

export default UserForm;
