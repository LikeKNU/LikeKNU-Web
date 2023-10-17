import axios from "axios";

// axios instance
const instance = axios.create({
  // baseURL: "http://116.123.68.210:8080",
  timeout: 10000,
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

export default instance;