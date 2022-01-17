import { Button, Col, Form, Input, Row, Select } from 'antd';
import BaseButton from 'commons/components/layouts/BaseButton';
import React from 'react';
import FormSearch from './FormSearch';
const { Option } = Select;
interface Props {
  options?: any;
}

const FilterForm = (props: Props) => {
  const { options } = props;
  const onReset = () => {
    console.log('ok');
  };
  const handleSearch = () => {
    console.log('1');
  };

  return (
    <Form className="filter-form">
      <Row>
        <Col span={18}>
          <Form.Item labelCol={{ span: 4 }} label="Theme" name="theme">
            <Col span={12} offset={1}>
              <Select placeholder="---All---">{options}</Select>
            </Col>
          </Form.Item>
        </Col>
        <FormSearch />
      </Row>
    </Form>
  );
};

export default FilterForm;
