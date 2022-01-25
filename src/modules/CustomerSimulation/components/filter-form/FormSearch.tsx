import { Col, Form, Input, Row } from 'antd';
import BaseButton from 'commons/components/layouts/BaseButton';
import React from 'react';

interface Props {
  onReset: () => void;
  handleSearch: () => void;
  value: string;
  disabled: boolean;
  onChangeValue: (e: any) => void;
}

const FormSearch = (props: Props) => {
  const { onReset, handleSearch, value, disabled, onChangeValue } = props;

  return (
    <Col span={24}>
      <Row>
        <Col span={18}>
          <Form.Item labelCol={{ span: 5 }} label="Keyword" name="keyword">
            <Col offset={1}>
              <Input onChange={onChangeValue} placeholder="Type to search..." value={value} />
            </Col>
          </Form.Item>
        </Col>
        <div className="wrapper-search">
          <BaseButton
            text="Reset"
            width={''}
            height={''}
            marginRight="5px"
            marginLeft="50px"
            disabled={props.disabled}
            backgroundColor={props.disabled ? '#C0C0C0' : '#6C757D'}
            onClick={onReset}
          />
          <BaseButton
            text="Search"
            width={''}
            height={''}
            disabled={props.disabled}
            border="1px solid #007BFF"
            marginRight={''}
            backgroundColor={props.disabled ? '#C0C0C0' : '#007BFF'}
            onClick={handleSearch}
            marginLeft={''}
          />
        </div>
      </Row>
    </Col>
  );
};

export default FormSearch;
