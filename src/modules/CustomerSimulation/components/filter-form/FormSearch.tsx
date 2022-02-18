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
          <Form.Item
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 18, style: { marginLeft: '10px' } }}
            label="キーワード"
            name="keyword"
          >
            <Col>
              <Input onChange={onChangeValue} placeholder="キーワードを入力してください。..." value={value} />
            </Col>
          </Form.Item>
        </Col>
        <Col span={4} style={{ display: 'flex' }}>
          <BaseButton
            text="Reset"
            disabled={props.disabled}
            backgroundColor={props.disabled ? '#C0C0C0' : '#6C757D'}
            onClick={onReset}
            marginLeft={'10px'}
          />
          <BaseButton
            text="Search"
            disabled={props.disabled}
            border="1px solid #007BFF"
            backgroundColor={props.disabled ? '#C0C0C0' : '#007BFF'}
            onClick={props.handleSearch}
            marginLeft={'10px'}
          />
        </Col>
      </Row>
    </Col>
  );
};

export default FormSearch;
