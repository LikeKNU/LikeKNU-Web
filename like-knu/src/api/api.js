import axios from "axios";

// axios instance
const instance = axios.create({
  baseURL: "https://53067293-11da-40b6-9b84-170eaa91fc73.mock.pstmn.io",
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