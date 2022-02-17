import { Col, Form, Input, Row, Select } from 'antd';
import BaseButton from 'commons/components/layouts/BaseButton';
import { TypeActiveAccount, TypeRole } from 'commons/type';
import React from 'react';

const { Option } = Select;
interface Props {
  handleSearch: () => void;
  onChange: (e: any) => void;
  onReset?: () => void;
  onStatusChange?: (value: any) => void;
  onRoleChange?: (value: any) => void;
  role: string;
  status: string;
  value: string;
  disabled?: boolean;
}

const FilterForm = (props: Props) => {
  const { onReset, handleSearch, onChange, value, onRoleChange, onStatusChange, disabled } = props;

  const [form] = Form.useForm<any>();

  const resetField = () => {
    form.setFieldsValue({
      role: '',
      status: '',
      keyword: '',
    });
    onReset && onReset();
  };
  return (
    <Form form={form} className="filter-form">
      <Row>
        <Col span={24}>
          <Row justify="center">
            <Col span={12}>
              <Form.Item labelCol={{ span: 6 }} wrapperCol={{ span: 14 }} label="Role" name="role">
                <Select placeholder="---全部---" onChange={onRoleChange}>
                  <Option value={TypeRole.SYSADMIN}>{TypeRole.SYSADMIN}</Option>
                  <Option value={TypeRole.ADMIN}>{TypeRole.ADMIN}</Option>
                  <Option value={TypeRole.CUSTOMER}>{TypeRole.CUSTOMER}</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item labelCol={{ span: 6 }} wrapperCol={{ span: 14 }} label="Status" name="status">
                <Select placeholder="---全部---" onChange={onStatusChange}>
                  <Option value={TypeActiveAccount.ACTIVE}>{TypeActiveAccount.ACTIVE}</Option>
                  <Option value={TypeActiveAccount.INACTIVE}>{TypeActiveAccount.INACTIVE}</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row>
            <Col span={18}>
              <Form.Item labelCol={{ span: 4 }} label="キーワード" name="keyword">
                <Input value={value} onChange={onChange} placeholder="Type username, email to search..." />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Row justify="space-between">
                <Col span={12}>
                  <Row justify="space-around">
                    <BaseButton
                      text="リセット"
                      disabled={disabled}
                      width={'90%'}
                      height={''}
                      marginRight=""
                      marginLeft=""
                      backgroundColor={props.disabled ? '#C0C0C0' : '#6C757D'}
                      onClick={resetField}
                    />
                  </Row>
                </Col>
                <Col span={12}>
                  <Row justify="space-around">
                    <BaseButton
                      text="検索"
                      disabled={disabled}
                      width={'90%'}
                      height={''}
                      border="1px solid #007BFF"
                      marginLeft={''}
                      marginRight={''}
                      backgroundColor={props.disabled ? '#C0C0C0' : '#007BFF'}
                      onClick={handleSearch}
                    />
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Form>
  );
};

export default FilterForm;
