import axios from 'axios';
import env from 'env';
import { getAuthLocalData } from 'helpers/token';
axios.defaults.baseURL = env.apiEndPointUrlImage;
axios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  },
);
const buildHeader = (includeAuth = true) => {
  const accessToken = getAuthLocalData()?.accessToken;
  const headers = {
    Authorization: includeAuth ? `Bearer ${accessToken}` : '',
    accept: '*/*',
    'Content-Type': 'multipart/form-data',
  };
  return headers;
};
export const postFormData = (url: string, formData: any, includeAuth = true) => {
  return axios
    .post(url, formData, {
      headers: buildHeader(includeAuth),
    })
    .then((res) => {
      return Promise.resolve(res);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};
