import axios, {
  AxiosInstance,
  AxiosPromise,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import { get, isNaN } from 'lodash';

const instance: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 1000 * 10,
  headers: { 'Content-Type': 'application/json' },
});

instance.interceptors.response.use((response: AxiosResponse) => {
  const code = get(response, 'data.code', -1);
  const data = get(response, 'data', {});
  const status = parseInt(code, 10);

  if (!isNaN(status) && status === 0) {
    return Promise.resolve(data);
  }

  return Promise.resolve(response);
});

const request = (options: AxiosRequestConfig): AxiosPromise => {
  const { url, method = 'GET', ...restArgs } = options;

  return instance({
    url,
    method,
    ...restArgs,
  });
};

export default request;
