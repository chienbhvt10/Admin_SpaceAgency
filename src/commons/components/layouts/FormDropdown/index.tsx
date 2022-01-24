import { Form, FormItemProps, Select } from 'antd';
import React from 'react';
import './style.scss';
interface IProps {
  options: React.ReactNode[];
  formItem?: FormItemProps;
  colOffSet?: number | string;
  items?: any[];
  loading?: boolean;
  onDropdownVisibleChange?: (open: boolean) => void;
  onSelect?: (value: any) => void;
}
const { Option } = Select;
const FormDropdown = (props: IProps) => {
  const { formItem, items, onDropdownVisibleChange, loading, onSelect } = props;
  return (
    <Form.Item {...formItem}>
      <Select
        onSelect={onSelect}
        onDropdownVisibleChange={onDropdownVisibleChange}
        placeholder="---All---"
        loading={loading}
      >
        <Option key="">---All---</Option>
        {items?.map((i) => {
          return <Option key={i?.id}>{i?.title}</Option>;
        })}
      </Select>
    </Form.Item>
  );
};

export default FormDropdown;
