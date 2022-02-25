import { Col, DatePicker, Form, Row } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import SelectFormItem from 'modules/CustomerSimulation/components/select-form-item';
import { useGetAllThemes } from 'modules/ThemesCollection/hooks/useGetAllThemes';
import { useGetAllUser } from 'modules/UserManagement/hooks/useGetAllUser';
import React from 'react';
import { useGetAllStyles } from '../../../StylesCollection/hooks/useGetAllStyles';
import FormSearch from './FormSearch';
interface Props {
  options?: any;
  onChangeTheme?: (value: string) => void;
  onChangeStyle?: (value: string) => void;
  onChangeUser?: (value: string) => void;
  onReset: () => void;
  handleSearch: () => void;
  disabled: boolean;
  value: string;
  onChangeValue: (e: any) => void;
}

const { RangePicker } = DatePicker;
// const dateFormat = 'YYYY/MM/DD';
const FilterForm = (props: Props) => {
  const [form] = useForm();
  const { getAllThemes, arrThemes, loading: loadingTheme } = useGetAllThemes();
  const { getAllStyles, arrStyles, loading: loadingStyle } = useGetAllStyles();
  const { getAllUser, arrUsers, loading: loadingUser } = useGetAllUser();
  const { onChangeTheme, onReset, handleSearch, disabled, value, onChangeStyle, onChangeValue, onChangeUser } = props;

  const onDropdownVisibleChangeTheme = (open: boolean) => {
    if (open) {
      getAllThemes();
    }
  };

  const onDropdownVisibleChangeStyle = (open: boolean) => {
    if (open) {
      getAllStyles();
    }
  };

  const onDropdownVisibleChangeUser = (open: boolean) => {
    if (open) {
      getAllUser();
    }
  };

  const resetFields = () => {
    form.setFieldsValue({
      theme: undefined,
      design: undefined,
      // date: undefined,
      user: undefined,
    });
    onReset && onReset();
  };
  return (
    <Form className="filter-form" form={form}>
      <Row justify="center">
        <Col span={22}>
          <Row>
            <Col span={12}>
              <SelectFormItem
                loading={loadingTheme}
                data={arrThemes || []}
                formItem={{
                  label: 'タイプ',
                  name: 'theme',
                  labelCol: { span: 6 },
                  wrapperCol: { span: 16, style: { marginLeft: '10px' } },
                }}
                onDropdownVisibleChange={onDropdownVisibleChangeTheme}
                onSelect={onChangeTheme}
              />
            </Col>
            <Col span={12}>
              <SelectFormItem
                loading={loadingStyle}
                data={arrStyles || []}
                formItem={{
                  label: 'デザイン',
                  name: 'style',
                  labelCol: { span: 6 },
                  wrapperCol: { span: 16, style: { marginLeft: '10px' } },
                }}
                onDropdownVisibleChange={onDropdownVisibleChangeStyle}
                onSelect={onChangeStyle}
              />
            </Col>
          </Row>
        </Col>
        <Col span={22}>
          <Row>
            <Col span={12}>
              <SelectFormItem
                loading={loadingUser}
                data={arrUsers || []}
                onDropdownVisibleChange={onDropdownVisibleChangeUser}
                formItem={{
                  label: '顧客／ユーザー',
                  name: 'user',
                  labelCol: { span: 6 },
                  wrapperCol: { span: 16, style: { marginLeft: '10px' } },
                }}
                onSelect={onChangeUser}
              />
            </Col>
            {/* <Col span={12}>
              <Form.Item
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 16, style: { marginLeft: '10px' } }}
                label="日付"
                name="date"
              >
                <RangePicker style={{ width: '100%' }} format={dateFormat} />
              </Form.Item>
            </Col> */}
          </Row>
        </Col>
        <Col span={22}>
          <FormSearch
            onChangeValue={onChangeValue}
            onReset={resetFields}
            handleSearch={handleSearch}
            disabled={disabled}
            value={value}
          />
        </Col>
      </Row>
    </Form>
  );
};

export default FilterForm;
