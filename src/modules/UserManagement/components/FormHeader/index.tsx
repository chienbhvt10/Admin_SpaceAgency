import { Button, Card } from 'antd';
import { TypeForm } from 'commons/type';
import 'modules/StylesCollection/styles/form-header.scss';
import React from 'react';

interface IProps {
  title: React.ReactElement;
  loading: boolean;
  children: React.ReactElement;
  onCancel?(): void;
  type: TypeForm;
}

const FormHeader = (props: IProps) => {
  const { title, loading, children, onCancel, type } = props;
  return (
    <div className="form-header">
      <Card
        className="form-header-style"
        bordered={false}
        title={title}
        extra={
          <div className="button-group">
            <Button size="large" onClick={onCancel}>
              キャンセル
            </Button>
            {type === TypeForm.CREATE ? (
              <Button size="large" htmlType="submit" loading={loading}>
                保存
              </Button>
            ) : (
              <></>
            )}
          </div>
        }
      >
        {children}
      </Card>
    </div>
  );
};

export default FormHeader;
