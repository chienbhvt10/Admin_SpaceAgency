import { Col, Form, FormInstance, Input, Row, Select } from 'antd';
import BaseButton from 'commons/components/layouts/BaseButton';
import { TypeActiveAccount, TypeRole } from 'commons/type';
import React from 'react';

const { Option } = Select;
interface Props {
  form: FormInstance;
  handleSearch: () => void;
  onChange: (e: any) => void;
  onReset?: () => void;
  onRoleChange?: (value: any) => void;
  role: string;
  value: string;
  disabled?: boolean;
}

const FilterForm = (props: Props) => {
  const { onReset, handleSearch, onChange, value, onRoleChange, disabled, form } = props;
  return (
    <Form form={form} className="filter-form">
      <Row justify="center">
        <Col span={22} style={{ marginLeft: '33px' }}>
          <Col span={12}>
            <Form.Item labelCol={{ span: 6 }} wrapperCol={{ span: 16 }} label="ロール" name="role">
              <Select placeholder="---全部---" onChange={onRoleChange}>
                <Option value={TypeRole.SYSADMIN}>システム管理者</Option>
                <Option value={TypeRole.ADMIN}>管理者</Option>
                <Option value={TypeRole.CUSTOMER}>ユーザー</Option>
              </Select>
            </Form.Item>
          </Col>
          {/* <Col span={12}>
              <Form.Item labelCol={{ span: 6 }} wrapperCol={{ span: 14 }} label="状態" name="status">
                <Select placeholder="---全部---" onChange={onStatusChange}>
                  <Option value={TypeActiveAccount.ACTIVE}>{TypeActiveAccount.ACTIVE}</Option>
                  <Option value={TypeActiveAccount.INACTIVE}>{TypeActiveAccount.INACTIVE}</Option>
                </Select>
              </Form.Item>
            </Col> */}
        </Col>
        <Col span={22}>
          <Col span={24} style={{ marginLeft: '20px' }}>
            <Row>
              <Col span={18}>
                <Form.Item labelCol={{ span: 4 }} wrapperCol={{ span: 19 }} label="キーワード" name="keyword">
                  <Input
                    value={value}
                    onChange={onChange}
                    placeholder="Eメール等の検索キーワードを入力してください。"
                  />
                </Form.Item>
              </Col>
              <Col span={4} style={{ display: 'flex' }}>
                <BaseButton
                  text="リセット"
                  disabled={disabled}
                  backgroundColor={disabled ? '#C0C0C0' : '#6C757D'}
                  onClick={onReset}
                  marginLeft={'10px'}
                />
                <BaseButton
                  text="検索"
                  disabled={disabled}
                  border="1px solid #007BFF"
                  backgroundColor={disabled ? '#C0C0C0' : '#007BFF'}
                  onClick={handleSearch}
                  marginLeft={'10px'}
                />
              </Col>
            </Row>
          </Col>
        </Col>
      </Row>
    </Form>
  );
};

export default FilterForm;
