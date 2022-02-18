import { ObjImage } from 'commons/type';
import { postFormData } from 'services/api-caller';

const URL_POST_IMAGE = '/images/upload';
export async function uploadImage(info: any) {
  const formData = new FormData();
  formData.append('image', info.file.originFileObj);
  try {
    const res = await postFormData(URL_POST_IMAGE, formData);
    return res;
  } catch (error) {
    return error;
  }
}
