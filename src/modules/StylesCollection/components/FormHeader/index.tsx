import { Button, Card } from 'antd';
import { TypeForm } from 'commons/type';
import 'modules/StylesCollection/styles/form-header.scss';
import React from 'react';

interface IProps {
  title: React.ReactElement;
  loading: boolean;
  children: React.ReactElement;
  onCancel?(): void;
}

const FormHeader = (props: IProps) => {
  const { title, loading, children, onCancel } = props;
  console.log(loading);
  return (
    <div className="form-header">
      <Card
        className="form-header-style"
        bordered={false}
        title={title}
        extra={
          <div className="button-group">
            <Button size="large" onClick={onCancel}>
              Cancel
            </Button>
            <Button size="large" htmlType="submit" loading={loading}>
              Save
            </Button>
          </div>
        }
      >
        {children}
      </Card>
    </div>
  );
};

export default FormHeader;
