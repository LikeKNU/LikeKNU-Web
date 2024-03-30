import axios from 'axios';
import { getDeviceId } from '../utils/DeviceManageUtil';

// axios instance
const instance = axios.create({
  // baseURL: "http://116.123.68.210:8080",
  timeout: 10000,
  headers: {
    'Device-Id': getDeviceId()
  }
});

// axios interceptor
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    return Promise.reject(err);
  }
)
instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
)

export default instance;
