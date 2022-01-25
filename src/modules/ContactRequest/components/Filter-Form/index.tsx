import React from 'react';
import BaseButton from 'commons/components/layouts/BaseButton';
import { Input, Form, Col } from 'antd';
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
      <Col span={18}>
        <Form form={form}>
          <Form.Item label="Keyword" labelCol={{ span: 2 }} name="search">
            <Input onChange={props.onChange} placeholder="Type to search..." />
          </Form.Item>
        </Form>
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
          onClick={props.onReset}
        />
        <BaseButton
          text="Search"
          width={''}
          height={''}
          disabled={props.disabled}
          border="1px solid #007BFF"
          marginRight={''}
          backgroundColor={props.disabled ? '#C0C0C0' : '#007BFF'}
          onClick={props.handleSearch}
          marginLeft={''}
        />
      </div>
    </div>
  );
};
