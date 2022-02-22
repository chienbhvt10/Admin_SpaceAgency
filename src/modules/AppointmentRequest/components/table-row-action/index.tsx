import { DeleteOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { Button, Popconfirm, Space } from 'antd';
import { IAppointmentRequest } from 'graphql/generated/graphql';
import React from 'react';

type IProps = {
  record: any;
  title: string;
  onDelete?: (record: IAppointmentRequest) => () => void;
  onEdit?: (record: IAppointmentRequest) => () => void;
};

const AppointmentTableRowAction = (props: IProps) => {
  const { onDelete, onEdit, record, title } = props;
  return (
    <Space size="small">
      {/* <Button type="ghost" onClick={onEdit(record)} shape="circle" icon={<EditOutlined />} size="middle" /> */}
      <Popconfirm
        title={title}
        cancelText="No"
        okText="はい"
        placement="left"
        onConfirm={onDelete?.(record)}
        icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
      >
        <Button style={{ color: 'red' }} type="ghost" shape="circle" icon={<DeleteOutlined />} size="middle" />
      </Popconfirm>
    </Space>
  );
};

export default AppointmentTableRowAction;
