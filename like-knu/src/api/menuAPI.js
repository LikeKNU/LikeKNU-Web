import instance from './api';
import { extractBodyFromResponse } from './apiUtility';

const baseURL = '/api/menu';

export const menuAPI = async (campus) => {
  const { data } = await instance.get(`${baseURL}`, {
    params: {
      campus: campus,
    },
  });
  return extractBodyFromResponse(data);
};
