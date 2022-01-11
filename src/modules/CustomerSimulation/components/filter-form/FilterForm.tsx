import { Button, Col, Form, Input, Row, Select } from 'antd';
import SelectFormItem from 'modules/CustomerSimulation/components/select-form-item';
import React from 'react';
interface Props {
  options?: any;
}
const FilterForm = (props: Props) => {
  const { options } = props;
  return (
    <Form className="filter-form">
      <Row style={{ margin: '30px 0 0 30px' }}>
        <Col span={22}>
          <Row>
            <Col span={12}>
              <SelectFormItem
                options={options}
                formItem={{
                  label: 'Theme',
                  name: 'theme',
                  labelCol: { span: 6 },
                }}
              />
            </Col>
            <Col span={12}>
              <SelectFormItem
                options={options}
                formItem={{
                  label: 'Design',
                  name: 'design',
                  labelCol: { span: 6 },
                }}
              />
            </Col>
          </Row>
        </Col>

        <Col span={16}>
          <Form.Item labelCol={{ span: 4 }} label="Keyword" name="keyword">
            <Input placeholder="Typing to search..." />
          </Form.Item>
        </Col>
        <Col span={3}>
          <Button size="middle" style={{ width: '80%', marginLeft: '10px', backgroundColor: 'gray', color: 'white' }}>
            Reset
          </Button>
        </Col>
        <Col span={3}>
          <Button style={{ width: '80%' }} type="primary">
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default FilterForm;
