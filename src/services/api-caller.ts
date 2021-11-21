import axios, { AxiosRequestConfig } from 'axios';
import env from 'env';

const API_ENDPOINT = env.apiEndPoint;
const TIMEOUT = 2000;
// const TOKEN = env.token;

axios.defaults.baseURL = API_ENDPOINT;
axios.defaults.timeout = TIMEOUT;
axios.interceptors.request.use(
  function (config) {
    requestHandler(config);
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);
const requestHandler = async (request: AxiosRequestConfig<any>) => {
  // Config request
};
