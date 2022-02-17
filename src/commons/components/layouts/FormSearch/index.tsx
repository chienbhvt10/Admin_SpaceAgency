import React from 'react';
import BaseButton from 'commons/components/layouts/BaseButton';
import { Input, Form, Col, Row } from 'antd';
interface IProps {
  handleSearch: () => void;
  onChange: (e: any) => void;
  onReset?: () => void;
  value: string;
  disabled?: boolean;
}
export const FormSearch = (props: IProps) => {
  const [form] = Form.useForm<any>();
  React.useEffect(() => {
    if (!props.value) {
      form.setFieldsValue({
        search: '',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.value]);
  return (
    <div id="form-search">
      <Col span={24} style={{ marginLeft: '20px' }}>
        <Row>
          <Col span={18}>
            <Form form={form}>
              <Form.Item label="Keyword" labelCol={{ span: 4 }} wrapperCol={{ span: 19 }} name="search">
                <Input onChange={props.onChange} placeholder="Type to search..." />
              </Form.Item>
            </Form>
          </Col>
          <Col span={4} style={{ display: 'flex' }}>
            <BaseButton
              text="Reset"
              disabled={props.disabled}
              backgroundColor={props.disabled ? '#C0C0C0' : '#6C757D'}
              onClick={props.onReset}
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
    </div>
  );
};
