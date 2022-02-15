import { uploadImage } from 'commons/components/layouts/Form-editor/services/uploadImages';
import env from 'env';
import React from 'react';

const endpointUrlImage = env.apiEndPointUrlImage;
export function useUploadImages() {
  const [loading, setLoading] = React.useState<boolean>(false);
  const uploadImages = async (file: any) => {
    try {
      setLoading(true);
      const res: any = await uploadImage(file);
      if (res) {
        setLoading(false);
        return endpointUrlImage + res?.data?.imagePath;
      }
    } catch (error) {
      setLoading(false);
      return error;
    }
  };
  return {
    uploadImages,
    loading,
  };
}
