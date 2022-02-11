import { Col, DatePicker, Form, Row } from 'antd';
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
  onReset: () => void;
  handleSearch: () => void;
  disabled: boolean;
  value: string;
  onChangeValue: (e: any) => void;
}

const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const FilterForm = (props: Props) => {
  const { getAllThemes, arrThemes, loading: loadingTheme } = useGetAllThemes();
  const { getAllStyles, arrStyles, loading: loadingStyle } = useGetAllStyles();
  const { getAllUser, arrUsers, loading: loadingUser } = useGetAllUser();
  const { onChangeTheme, onReset, handleSearch, disabled, value, onChangeStyle, onChangeValue } = props;

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

  return (
    <Form className="filter-form">
      <Row>
        <Col span={24}>
          <Row>
            <Col span={12}>
              <SelectFormItem
                loading={loadingTheme}
                colOffSet={1}
                data={arrThemes || []}
                formItem={{
                  label: 'テーマ',
                  name: 'theme',
                  labelCol: { span: 8 },
                }}
                onDropdownVisibleChange={onDropdownVisibleChangeTheme}
                onSelect={onChangeTheme}
              />
            </Col>
            <Col span={12}>
              <SelectFormItem
                loading={loadingStyle}
                colOffSet={1}
                data={arrStyles || []}
                formItem={{
                  label: 'デザイン',
                  name: 'design',
                  labelCol: { span: 8 },
                }}
                onDropdownVisibleChange={onDropdownVisibleChangeStyle}
                onSelect={onChangeStyle}
              />
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row>
            <Col span={12}>
              <SelectFormItem
                loading={loadingUser}
                colOffSet={1}
                data={arrUsers || []}
                onDropdownVisibleChange={onDropdownVisibleChangeUser}
                formItem={{
                  label: '顧客／ユーザー',
                  name: 'theme',
                  labelCol: { span: 8 },
                }}
              />
            </Col>
            <Col span={12}>
              <Form.Item labelCol={{ span: 8 }} label="日付" name="date">
                <Col offset={1}>
                  <RangePicker style={{ width: '100%' }} format={dateFormat} />
                </Col>
              </Form.Item>
            </Col>
          </Row>
        </Col>
        <FormSearch
          onChangeValue={onChangeValue}
          onReset={onReset}
          handleSearch={handleSearch}
          disabled={disabled}
          value={value}
        />
      </Row>
    </Form>
  );
};

export default FilterForm;
