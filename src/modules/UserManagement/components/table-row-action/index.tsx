import { DeleteOutlined, EditOutlined, QuestionCircleOutlined, LockOutlined } from '@ant-design/icons';
import { Button, Popconfirm, Space } from 'antd';
import { TypeRole } from 'commons/type';
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
      <Button type="ghost" onClick={onEdit(record)} shape="circle" icon={<EditOutlined />} size="middle" />
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

      {record.role === TypeRole.ADMIN.toString() ? (
        <Button type="ghost" shape="circle" icon={<LockOutlined />} size="middle" disabled />
      ) : (
        <Button type="ghost" shape="circle" icon={<LockOutlined />} size="middle" />
      )}
    </Space>
  );
};

export default TableRowAction;
