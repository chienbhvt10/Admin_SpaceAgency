import { DeleteOutlined, EditOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { Button, Popconfirm, Space } from 'antd';
import { Users } from 'graphql/generated/graphql';
import React from 'react';

interface IProps {
  record: Users;
  onDelete: (record: Users) => () => void;
  onEdit: (record: Users) => () => void;
  title: string;
}
export default function UserRowActions(props: IProps) {
  return (
    <Space size="small">
      <Button type="ghost" onClick={props.onEdit(props.record)} shape="circle" icon={<EditOutlined />} size="middle" />

      <Popconfirm
        title={props.title}
        cancelText="No"
        okText="Yes"
        placement="left"
        onConfirm={props.onDelete(props.record)}
        icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
      >
        <Button type="ghost" shape="circle" icon={<DeleteOutlined />} size="middle" />
      </Popconfirm>
    </Space>
  );
}
