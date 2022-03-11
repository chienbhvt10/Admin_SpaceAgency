import { Col, Form, FormItemProps, FormProps, Input, Row, Select } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import Title from 'antd/lib/typography/Title';
import { CommonPath } from 'commons/base-routes';
import { TypeForm, TypeRole } from 'commons/type';
import { CreateUserInput, IUsersFields, UpdateUserInput } from 'graphql/generated/graphql';
import { useCreateUser } from 'modules/UserManagement/hooks/useCreateUser';
import { useUpdateUser } from 'modules/UserManagement/hooks/useUpdateUser';
import React from 'react';
import { useNavigate } from 'react-router';
import FormHeader from '../FormHeader';

const layout: FormProps = {
  layout: 'horizontal',
};
const { Option } = Select;
const tailLayout: FormItemProps = {};

interface IProps {
  title: string;
  loading: boolean;
  item?: IUsersFields;
  type: TypeForm;
  onChange?(): void;
}
const requireRule = { required: true, message: 'この項目は必須です。' };
const emailFormatRule = {
  pattern: /^\w+([+\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  message: 'メールアドレスが正しくありません',
};
const furiganaRule = {
  pattern: /^([ァ-ヶー]+)$/,
  message: '全角カタカナのみで入力して下さい',
};
const passwordRule = {
  min: 8,
  message: 'パスワードは8文字以上でご入力ください',
};
const phoneRule = {
  pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
  message: '電話番号の形が正しくありません。',
};
function ThemeForm(props: IProps) {
  const { loading, item, onChange, title } = props;
  const { updateUser } = useUpdateUser();
  const { createUser } = useCreateUser();
  const navigate = useNavigate();
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
    postcode: '',
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
        postcode: item.postcode,
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
        postcode: values.postcode,
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
  const onCancel = () => {
    navigate(CommonPath.USERS_MANAGEMENT);
  };
  return (
    <>
      <Form
        {...layout}
        name="basic"
        initialValues={{
          ...props.item,
          role: TypeRole.CUSTOMER,
        }}
        form={form}
        onValuesChange={onChange}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <FormHeader title={<Title level={2}>{title}</Title>} loading={loading} onCancel={onCancel}>
          <Row>
            <Col span={12}>
              <Row justify="center">
                <Col span={20}>
                  <Form.Item
                    labelCol={{ span: 6 }}
                    label={<Title level={5}>Eメール</Title>}
                    name="email"
                    rules={[requireRule, emailFormatRule]}
                    {...tailLayout}
                  >
                    <Input disabled />
                  </Form.Item>
                </Col>
                <Col span={20}>
                  <Form.Item
                    labelCol={{ span: 6 }}
                    label={<Title level={5}>名</Title>}
                    name="firstName"
                    rules={[requireRule]}
                    {...tailLayout}
                  >
                    <Input disabled />
                  </Form.Item>
                </Col>
                <Col span={20}>
                  <Form.Item
                    labelCol={{ span: 6 }}
                    label={<Title level={5}>姓</Title>}
                    name="lastName"
                    rules={[requireRule]}
                    {...tailLayout}
                  >
                    <Input disabled />
                  </Form.Item>
                </Col>
                {props.type === TypeForm.CREATE && (
                  <Col span={20}>
                    <Form.Item
                      labelCol={{ span: 6 }}
                      label={<Title level={5}>パスワード</Title>}
                      name="password"
                      rules={[requireRule, passwordRule]}
                      {...tailLayout}
                    >
                      <Input onChange={handleChangePassword} disabled />
                    </Form.Item>
                  </Col>
                )}
                <Col span={20}>
                  <Form.Item
                    labelCol={{ span: 6 }}
                    label={<Title level={5}>電話番号</Title>}
                    name="phone"
                    rules={[phoneRule]}
                    {...tailLayout}
                  >
                    <Input disabled />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
            <Col span={12}>
              <Row justify="center">
                <Col span={20}>
                  <Form.Item labelCol={{ span: 6 }} label={<Title level={5}>ロール</Title>} name="role">
                    <Input disabled />
                  </Form.Item>
                </Col>
                <Col span={20}>
                  <Form.Item
                    labelCol={{ span: 6 }}
                    label={<Title level={5}>名（フリガナ）</Title>}
                    name="firstNameF"
                    rules={[requireRule, furiganaRule]}
                    {...tailLayout}
                  >
                    <Input disabled />
                  </Form.Item>
                </Col>

                <Col span={20}>
                  <Form.Item
                    labelCol={{ span: 6 }}
                    label={<Title level={5}>姓（フリガナ）</Title>}
                    name="lastNameF"
                    rules={[requireRule, furiganaRule]}
                    {...tailLayout}
                  >
                    <Input disabled />
                  </Form.Item>
                </Col>
                <Col span={20}>
                  <Form.Item
                    labelCol={{ span: 6 }}
                    label={<Title level={5}>郵便番号</Title>}
                    name="postcode"
                    {...tailLayout}
                  >
                    <Input disabled />
                  </Form.Item>
                </Col>
                <Col span={20}>
                  <Form.Item
                    labelCol={{ span: 6 }}
                    label={<Title level={5}>住所</Title>}
                    name="address"
                    {...tailLayout}
                  >
                    <TextArea disabled />
                  </Form.Item>
                </Col>
              </Row>
              {/* <Col span={20}>
                <Form.Item labelCol={{ span: 6 }} label={<Title level={5}>Gender</Title>} name="gender">
                  <Radio.Group>
                  <Radio value="male">Male</Radio>
                    <Radio value="female">Female</Radio>
                  </Radio.Group>
                  </Form.Item>
              </Col> */}
              {/* <Col span={20}>
                <Form.Item labelCol={{ span: 6 }} label={<Title level={5}>状態</Title>} name="status">
                  <Select placeholder="---全部---">
                  <Option value={TypeActiveAccount.NOT_ACTIVE}>{TypeActiveAccount.NOT_ACTIVE}</Option>
                  <Option value={TypeActiveAccount.ACTIVE}>{TypeActiveAccount.ACTIVE}</Option>
                  <Option value={TypeActiveAccount.INACTIVE}>{TypeActiveAccount.INACTIVE}</Option>
                  </Select>
                  </Form.Item>
              </Col> */}
            </Col>
            {/* <Col span={8}>
              <Form.Item
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 16 }}
              label="アバター"
                name="avatar"
                rules={[requireRule]}
                >
                <Input />
                </Form.Item>
                
                <Col span={23} style={{ height: '350px' }}>
                <UploadDragger />
                </Col>
              </Col> */}
          </Row>
        </FormHeader>
      </Form>
    </>
  );
}

export default ThemeForm;
