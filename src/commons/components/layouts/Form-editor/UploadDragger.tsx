import { LoadingOutlined, PlusOutlined, DeleteOutlined, EyeOutlined, CloseSquareOutlined } from '@ant-design/icons';
import { message, Upload, Button, Space } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import env from 'env';
import { getDimensions } from 'helpers/getDimensions';
import React, { useCallback, useState } from 'react';
import './style.scss';

function getBase64(img: any, callback: any) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

interface IProps {
  value?: any;
  imageUrl?: string;
  onChange?(media: any | undefined): void;
  width?: number;
  loading?: boolean;
  height?: number;
  handleChange?: (info: any) => void;
  mustBeSquare?: boolean;
  resetToDefault?: () => void;
}

export default function UploadDragger(props: IProps) {
  const beforeUpload = useCallback(
    async (file: any) => {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        message.error('Bạn chỉ có thể tải lên tệp JPG / PNG!');
        throw new Error('Bạn chỉ có thể tải lên tệp JPG / PNG! ');
      }
      const isLt2M = file.size / 1024 / 1024 < 5;
      if (!isLt2M) {
        message.error('Hình ảnh phải có kích thước nhỏ hơn 5MB!');
        throw new Error('Hình ảnh phải có kích thước nhỏ hơn 5MB! ');
      }
      const dimensions = await getDimensions(file);

      if (props.mustBeSquare === true && dimensions.width !== dimensions.height) {
        message.error('Ảnh phải là hình vuông');
        throw new Error('Ảnh phải là hình vuông');
      }

      if (props.height !== undefined && props.width !== undefined) {
        if (dimensions.width !== props.width || dimensions.height !== props.height) {
          message.error('Ảnh phải có kích thước: ' + props.width + 'x' + props.height);
          throw new Error('Ảnh phải có kích thước: ' + props.width + 'x' + props.height);
        }
      }
      if (props.height !== undefined && props.width === undefined) {
        if (dimensions.height !== props.height) {
          message.error('Kích thước sai, phải là: ... X ' + props.height);
          throw new Error('Kích thước sai, phải là: ... X ' + props.height);
        }
      }
      if (props.width !== undefined && props.height === undefined) {
        if (dimensions.width !== props.width) {
          message.error('Kích thước sai, phải là: ' + props.width + 'x ...');
          throw new Error('Kích thước sai, phải là: ' + props.width + 'x ...');
        }
      }
    },
    [props.width, props.height, props.mustBeSquare],
  );

  const [state, setState] = useState({
    imageUrl: '',
    loading: false,
    value: props.value,
  });
  React.useEffect(() => {
    setState({
      ...state,
      imageUrl: props.imageUrl || '',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.imageUrl]);
  const [stateIMG, setStateIMG] = useState({
    previewVisible: false,
  });

  const handleChange = (info: any) => {
    if (info.file.status === 'uploading') {
      props.handleChange && props.handleChange(info);
      return;
    }
  };

  const customRequest = ({ onSuccess, onError, file }: any) => {};
  return (
    <>
      {state.imageUrl ? (
        <div className="container">
          <Modal
            visible={stateIMG.previewVisible}
            onCancel={() => {
              setStateIMG({ previewVisible: false });
            }}
            footer={null}
            closeIcon={<CloseSquareOutlined size={3} style={{ fontSize: '30px', color: 'black' }} />}
          >
            <img alt="ImgProduct" src={props.imageUrl} style={{ width: '100%' }} />
          </Modal>
          <input
            type="image"
            src={state.imageUrl}
            value={props.value?.id}
            className="image"
            alt="avatar"
            height={300}
            style={{ width: '100%', objectFit: 'cover' }}
          />
          <div className="middle">
            <Space>
              <Button
                type="ghost"
                shape="circle"
                icon={<DeleteOutlined style={{ color: '#ffffff' }} />}
                size="middle"
                title="Xóa"
                onClick={() => {
                  props.resetToDefault?.();
                  setState({
                    imageUrl: '',
                    loading: false,
                    value: { id: '', createdBy: '', fileName: '', fileType: '', size: 0, uri: '' },
                  });
                }}
              />
              <Button
                type="ghost"
                shape="circle"
                icon={<EyeOutlined style={{ color: '#ffffff' }} />}
                size="middle"
                title="Xem"
                onClick={() => {
                  setStateIMG({ previewVisible: true });
                }}
              />
            </Space>
          </div>
        </div>
      ) : (
        <Upload.Dragger
          name="image"
          className="upload"
          customRequest={customRequest}
          multiple={false}
          showUploadList={false}
          beforeUpload={beforeUpload}
          onChange={handleChange}
          accept="image/*"
        >
          <div>
            {props.loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
          </div>
        </Upload.Dragger>
      )}
    </>
  );
}
