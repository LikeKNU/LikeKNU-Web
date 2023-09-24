import axios from "axios";

// axios instance
const instance = axios.create({
  baseURL: "http://210.125.212.192:8888",
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