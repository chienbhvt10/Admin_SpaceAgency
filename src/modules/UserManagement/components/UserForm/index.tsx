import { Button, Col, Form, FormItemProps, FormProps, Input, Row, Space } from 'antd';
import UploadDragger from 'commons/components/layouts/Form-editor/UploadDragger';
import { TypeForm } from 'commons/type';
import { CreateUserInput, IUsersFields, UpdateUserInput } from 'graphql/generated/graphql';
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
  const [form] = Form.useForm<IUsersFields>();
  const inputCreate: CreateUserInput = {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
  };
  const [dataInputCreate, setDataInputCreate] = React.useState<CreateUserInput>(inputCreate);
  const [updateUserInput, setUpdateUserInput] = React.useState<UpdateUserInput>({
    id: '',
    email: '',
    firstName: '',
    lastName: '',
  });

  React.useEffect(() => {
    if (item) {
      setUpdateUserInput({
        id: item.id,
        email: item.email,
        firstName: item.firstName,
        lastName: item.lastName,
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
    }
  };
  const onFinishFailed = () => {};
  const handleChangeEmail = (e: any) => {
    if (props.type === TypeForm.CREATE) {
      setDataInputCreate({
        ...dataInputCreate,
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
      setDataInputCreate({
        ...dataInputCreate,
        password: e.target.value,
      });
    }
  };
  // const handleChangePhone = (e: any) => {
  //   if (props.type === TypeForm.CREATE) {
  //     setDataInputCreate({
  //       ...dataInputCreate,
  //       phone: e.target.value,
  //     });
  //   }
  //   if (props.type === TypeForm.UPDATE) {
  //     setDataInputUpdate({
  //       ...dataInputUpdate,
  //       phone: e.target.value,
  //     });
  //   }
  // };
  // const handleChangeAddress = (e: any) => {
  //   if (props.type === TypeForm.CREATE) {
  //     setDataInputCreate({
  //       ...dataInputCreate,
  //       address: e.target.value,
  //     });
  //   }
  //   if (props.type === TypeForm.UPDATE) {
  //     setDataInputUpdate({
  //       ...dataInputUpdate,
  //       address: e.target.value,
  //     });
  //   }
  // };
  // const handleChangeName = (e: any) => {
  //   if (props.type === TypeForm.CREATE) {
  //     setDataInputCreate({
  //       ...dataInputCreate,
  //       name: e.target.value,
  //     });
  //   }
  //   if (props.type === TypeForm.UPDATE) {
  //     setDataInputUpdate({
  //       ...dataInputUpdate,
  //       name: e.target.value,
  //     });
  //   }
  // };
  const handleChangeFirstName = (e: any) => {
    if (props.type === TypeForm.CREATE) {
      setDataInputCreate({
        ...dataInputCreate,
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
      setDataInputCreate({
        ...dataInputCreate,
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
                <Form.Item label="Last Name" name="lastName" {...tailLayout}>
                  <Input onChange={handleChangeLastName} />
                </Form.Item>
              </Col>
              {/* <Col span={12}>
                <Form.Item label="Phone" name="phone" {...tailLayout}>
                  <Input onChange={handleChangePhone} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Address" name="address" rules={[requireRule]} {...tailLayout}>
                  <Input onChange={handleChangeAddress} />
                </Form.Item>
              </Col> */}
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
