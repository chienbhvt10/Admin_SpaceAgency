import { Button, Card } from 'antd';
import React from 'react';

interface IProps {
  title?: React.ReactElement;
  loading: boolean;
  children?: React.ReactElement;
  onDone?: () => void;
  onReject?: () => void;
  onApprove?: () => void;
}

const ButtonGroup = ({ loading, onDone, onReject, onApprove }: IProps) => {
  return (
    <div className="button-group">
      <Button onClick={onDone} size="large" htmlType="submit">
        完成
      </Button>
      <Button
        onClick={onReject}
        style={{ backgroundColor: '#a83242' }}
        htmlType="submit"
        size="large"
        loading={loading}
      >
        拒否
      </Button>
      <Button onClick={onApprove} type="primary" size="large" htmlType="submit" loading={loading}>
        承認
      </Button>
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
