import { Button, Col, Form, Input, Row, Select } from 'antd';
import BaseButton from 'commons/components/layouts/BaseButton';
import { TypeActiveAccount, TypeRole } from 'commons/type';
import React, { useState } from 'react';

const { Option } = Select;
interface Props {
  handleSearch: (value: string, role: string, status: string) => () => void;
  onChange: (e: any) => void;
  onReset?: () => void;
  onStatusChange?: (value: any) => void;
  onRoleChange?: (value: any) => void;
  role: string;
  status: string;
  value: string;
}

const FilterForm = (props: Props) => {
  const { role, status, handleSearch, onChange, value, onReset, onRoleChange, onStatusChange } = props;

  return (
    <Form className="filter-form">
      <Row>
        <Col span={24}>
          <Row justify="center">
            <Col span={12}>
              <Form.Item labelCol={{ span: 6 }} wrapperCol={{ span: 14 }} label="Role" name="role">
                <Col offset={2}>
                  <Select placeholder="---All---" onChange={onRoleChange}>
                    <Option value={TypeRole.SYSADMIN}>{TypeRole.SYSADMIN}</Option>
                    <Option value={TypeRole.ADMIN}>{TypeRole.ADMIN}</Option>
                    <Option value={TypeRole.CUSTOMER}>{TypeRole.CUSTOMER}</Option>
                  </Select>
                </Col>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item labelCol={{ span: 6 }} wrapperCol={{ span: 14 }} label="Status" name="status">
                <Col offset={2}>
                  <Select placeholder="---All---" onChange={onStatusChange}>
                    <Option value={TypeActiveAccount.ACTIVE}>{TypeActiveAccount.ACTIVE}</Option>
                    <Option value={TypeActiveAccount.INACTIVE}>{TypeActiveAccount.INACTIVE}</Option>
                  </Select>
                </Col>
              </Form.Item>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row>
            <Col span={18}>
              <Form.Item labelCol={{ span: 4 }} label="Keyword" name="keyword">
                <Col offset={1}>
                  <Input value={value} onChange={onChange} placeholder="Type username, email to search..." />
                </Col>
              </Form.Item>
            </Col>
            <Col span={4}>
              <Row justify="space-between">
                <Col span={12}>
                  <Row justify="space-around">
                    <BaseButton
                      text="Reset"
                      width={'90%'}
                      height={''}
                      marginRight=""
                      marginLeft=""
                      backgroundColor="#6C757D"
                      onClick={onReset}
                    />
                  </Row>
                </Col>
                <Col span={12}>
                  <Row justify="space-around">
                    <BaseButton
                      text="Search"
                      width={'90%'}
                      height={''}
                      border="1px solid #007BFF"
                      marginLeft={''}
                      marginRight={''}
                      backgroundColor="#007BFF"
                      onClick={handleSearch(value, role, status)}
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
