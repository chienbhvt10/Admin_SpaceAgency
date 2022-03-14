import { DeleteOutlined, EyeOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { Button, Popconfirm, Space } from 'antd';
import { IUsersFields } from 'graphql/generated/graphql';
import React from 'react';
interface IProps {
  record: IUsersFields;
  title: string;
  onDelete: (record: IUsersFields) => () => void;
  onEdit: (record: IUsersFields) => () => void;
}

const TableRowAction = (props: IProps) => {
  const { onDelete, onEdit, record, title } = props;
  return (
    <Space size="small">
      <Button type="ghost" onClick={onEdit(record)} shape="circle" icon={<EyeOutlined />} size="middle" />
      <Popconfirm
        title={title}
        cancelText="いいえ"
        okText="はい"
        placement="left"
        onConfirm={onDelete(record)}
        icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
      >
        <Button style={{ color: 'red' }} type="ghost" shape="circle" icon={<DeleteOutlined />} size="middle" />
      </Popconfirm>
    </Space>
  );
};

export default TableRowAction;
