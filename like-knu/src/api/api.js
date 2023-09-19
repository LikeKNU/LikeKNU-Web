import axios from "axios";

// axios instance
const instance = axios.create({
  baseURL: "https://3ce0ef2e-86a4-4c2b-a1e3-a3dde60f58b3.mock.pstmn.io",
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