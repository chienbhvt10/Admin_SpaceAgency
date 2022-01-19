import { Button, Col, Form, Input, Row, Select } from 'antd';
import BaseButton from 'commons/components/layouts/BaseButton';
import React from 'react';
import FormSearch from './FormSearch';
const { Option } = Select;
interface Props {
  options?: any;
  value: string;
  onChangeValue: (e: any) => void;
  handleSearch: () => void;
  onReset: () => void;
}

const FilterForm = (props: Props) => {
  const { options, value, onChangeValue, handleSearch, onReset } = props;

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
        <FormSearch value={value} onChangeValue={onChangeValue} handleSearch={handleSearch} onReset={onReset} />
      </Row>
    </Form>
  );
};

export default FilterForm;
