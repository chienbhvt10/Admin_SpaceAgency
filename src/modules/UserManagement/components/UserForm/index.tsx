import { Button, Col, Form, FormItemProps, FormProps, Input, Radio, Row, Select, Space, Upload } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import Title from 'antd/lib/typography/Title';
import UploadDragger from 'commons/components/layouts/Form-editor/UploadDragger';
import { TypeActiveAccount, TypeForm, TypeRole } from 'commons/type';
import { CreateUserInput, IUsersFields, UpdateUserInput } from 'graphql/generated/graphql';
import { useCreateUser } from 'modules/UserManagement/hooks/useCreateUser';
import { useUpdateUser } from 'modules/UserManagement/hooks/useUpdateUser';
import React from 'react';
import { useDispatch } from 'react-redux';
import FormHeader from '../FormHeader';
const tailLayout: FormItemProps = {};
const { Option } = Select;
interface IProps {
  title: string;
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
  const { loading, item, onCancel, onChange, title } = props;
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
        <FormHeader title={<Title level={2}>{title}</Title>} loading={loading} onCancel={onCancel}>
          <Row>
            <Col span={14}>
              <Row justify="center">
                <Col span={18}>
                  <Form.Item
                    labelCol={{ span: 4 }}
                    label="First Name"
                    name="firstName"
                    rules={[requireRule]}
                    {...tailLayout}
                  >
                    <Col offset={1}>
                      <Input />
                    </Col>
                  </Form.Item>
                </Col>
                <Col span={18}>
                  <Form.Item
                    labelCol={{ span: 4 }}
                    label="Last Name"
                    name="lastName"
                    rules={[requireRule]}
                    {...tailLayout}
                  >
                    <Col offset={1}>
                      <Input />
                    </Col>
                  </Form.Item>
                </Col>
                <Col span={18}>
                  <Form.Item
                    labelCol={{ span: 4 }}
                    label="Email"
                    name="email"
                    rules={[requireRule, requireEmail]}
                    {...tailLayout}
                  >
                    <Col offset={1}>
                      <Input />
                    </Col>
                  </Form.Item>
                </Col>
                {props.type === TypeForm.CREATE && (
                  <Col span={18}>
                    <Form.Item
                      labelCol={{ span: 4 }}
                      label="Password"
                      name="password"
                      rules={[requireRule]}
                      {...tailLayout}
                    >
                      <Col offset={1}>
                        <Input type={'password'} onChange={handleChangePassword} />
                      </Col>
                    </Form.Item>
                  </Col>
                )}
                <Col span={18}>
                  <Form.Item labelCol={{ span: 4 }} name="gender" label="Gender">
                    <Col offset={1}>
                      <Radio.Group>
                        <Radio value="1">Yes</Radio>
                        <Radio value="2">Not Yet</Radio>
                      </Radio.Group>
                    </Col>
                  </Form.Item>
                </Col>

                <Col span={18}>
                  <Form.Item labelCol={{ span: 4 }} label="Address" name="address" rules={[requireRule]}>
                    <Col offset={1}>
                      <TextArea rows={3} showCount maxLength={1000} />
                    </Col>
                  </Form.Item>
                </Col>
                <Col span={18}>
                  <Form.Item labelCol={{ span: 4 }} label="Role" name="role">
                    <Col offset={1}>
                      <Select placeholder="---All---">
                        <Option value={TypeRole.SYSADMIN}>{TypeRole.SYSADMIN}</Option>
                        <Option value={TypeRole.ADMIN}>{TypeRole.ADMIN}</Option>
                        <Option value={TypeRole.CUSTOMER}>{TypeRole.CUSTOMER}</Option>
                      </Select>
                    </Col>
                  </Form.Item>
                </Col>
                <Col span={18}>
                  <Form.Item labelCol={{ span: 4 }} label="Status" name="status">
                    <Col offset={1}>
                      <Select placeholder="---All---">
                        <Option value={TypeActiveAccount.ACTIVE}>{TypeActiveAccount.ACTIVE}</Option>
                        <Option value={TypeActiveAccount.INACTIVE}>{TypeActiveAccount.INACTIVE}</Option>
                      </Select>
                    </Col>
                  </Form.Item>
                </Col>
              </Row>
            </Col>
            <Col span={10}>
              <Row justify="end">
                <Col span={24}>
                  <Form.Item labelCol={{ span: 4 }} label="Avatar" name="preview" rules={[requireRule]}>
                    <Col offset={1}>
                      <Row>
                        <Col span={16}>
                          <Input />
                        </Col>
                        <Col span={8}>
                          <Upload name="image">
                            <Button htmlType="button" type="primary">
                              Choose Images
                            </Button>
                          </Upload>
                        </Col>
                      </Row>
                    </Col>
                  </Form.Item>
                </Col>
                <Col span={20} style={{ height: '350px', marginRight: '20px' }}>
                  <UploadDragger />
                </Col>
              </Row>
            </Col>
          </Row>
        </FormHeader>
      </Form>
    </>
  );
}

export default UserForm;
