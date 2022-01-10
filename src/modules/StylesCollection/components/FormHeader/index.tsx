import { Button, Card } from 'antd';
import React from 'react';
import '../../styles/form-header.scss';

interface IProps {
  title: React.ReactElement;
  loading: boolean;
  children: React.ReactElement;
}

const FormHeader = (props: IProps) => {
  const { title, loading, children } = props;
  return (
    <div className="form-header">
      <Card
        className="form-header-style"
        bordered={false}
        title={title}
        extra={
          <div className="button-group">
            <Button size="large">Cancel</Button>
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
