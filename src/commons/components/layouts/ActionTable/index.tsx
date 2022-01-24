import { DeleteOutlined, EditOutlined, QuestionCircleOutlined, EllipsisOutlined } from '@ant-design/icons';
import { Button, Popconfirm, Space } from 'antd';
// import { Users } from 'graphql/generated/graphql';
import React from 'react';

interface IProps {
  record: any;
  onDelete: (record: any) => () => void;
  onEdit: (record: any) => () => void;
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
        <Button type="ghost" shape="circle" icon={<DeleteOutlined />} size="middle" style={{ color: 'red' }} />
      </Popconfirm>
      {/* <Button type="ghost" shape="circle" icon={<EllipsisOutlined />} size="middle" /> */}
    </Space>
  );
}
