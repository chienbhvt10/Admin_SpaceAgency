import { Button, Card } from 'antd';
import { TypeForm } from 'commons/type';
import React from 'react';

interface IProps {
  title?: React.ReactElement;
  loading: boolean;
  children?: React.ReactElement;
  onCancel?(): void;
  type?: TypeForm;
}

const ButtonGroup = ({ onCancel, loading, type }: IProps) => {
  const isUpdate = type === TypeForm.UPDATE;
  return (
    <div className="button-group">
      <Button size="large" onClick={onCancel}>
        Cancel
      </Button>
      {isUpdate ? (
        <>
          <Button style={{ backgroundColor: '#a83242' }} size="large" htmlType="submit" loading={loading}>
            Reject
          </Button>
          <Button type="primary" size="large" htmlType="submit" loading={loading}>
            Approve
          </Button>
        </>
      ) : (
        <Button type="primary" size="large" htmlType="submit" loading={loading}>
          Save
        </Button>
      )}
    </div>
  );
};
const FormHeader = (props: IProps) => {
  const { title, children } = props;
  return (
    <div className="form-header">
      <Card className="form-header-style" bordered={false} title={title} extra={<ButtonGroup {...props} />}>
        {children}
      </Card>
    </div>
  );
};

export default FormHeader;
