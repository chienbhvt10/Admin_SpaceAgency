import { Button, Col, DatePicker, Form, Input, Row, Select } from 'antd';
import BaseButton from 'commons/components/layouts/BaseButton';
import SelectFormItem from 'modules/CustomerSimulation/components/select-form-item';
import moment from 'moment';
import React from 'react';
import FormSearch from './FormSearch';
interface Props {
  options?: any;
}

const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const FilterForm = (props: Props) => {
  const { options } = props;

  return (
    <Form className="filter-form">
      <Row>
        <Col span={24}>
          <Row>
            <Col span={12}>
              <SelectFormItem
                colOffSet={1}
                options={options}
                formItem={{
                  label: 'Theme',
                  name: 'theme',
                  labelCol: { span: 8 },
                }}
              />
            </Col>
            <Col span={12}>
              <SelectFormItem
                colOffSet={1}
                options={options}
                formItem={{
                  label: 'Design',
                  name: 'design',
                  labelCol: { span: 8 },
                }}
              />
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row>
            <Col span={12}>
              <SelectFormItem
                colOffSet={1}
                options={options}
                formItem={{
                  label: 'Customer/User',
                  name: 'theme',
                  labelCol: { span: 8 },
                }}
              />
            </Col>
            <Col span={12}>
              <Form.Item labelCol={{ span: 8 }} label="Date" name="date">
                <Col offset={1}>
                  <RangePicker style={{ width: '100%' }} format={dateFormat} />
                </Col>
              </Form.Item>
            </Col>
          </Row>
        </Col>
        <FormSearch />
      </Row>
    </Form>
  );
};

export default FilterForm;
