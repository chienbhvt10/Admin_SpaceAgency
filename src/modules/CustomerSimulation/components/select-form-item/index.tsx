import { Col, Form, FormItemProps, Select } from 'antd';
import { TypeSelect } from 'commons/type';
import React from 'react';

const { Option } = Select;
interface Props {
  data: TypeSelect[];
  formItem?: FormItemProps;
  className?: string;
  onSelect?: (value: any) => void;
  onDropdownVisibleChange?: (open: boolean) => void;
  loading: boolean;
}

const SelectFormItem = (props: Props) => {
  const { data, className, formItem, onSelect, onDropdownVisibleChange, loading } = props;
  return (
    <Form.Item {...formItem} className={className}>
      <Select
        loading={loading}
        onDropdownVisibleChange={onDropdownVisibleChange}
        onSelect={onSelect}
        placeholder="---全部---"
      >
        {data.map((item) => {
          return <Option key={item?.id}>{item?.title}</Option>;
        })}
      </Select>
    </Form.Item>
  );
};

export default SelectFormItem;
