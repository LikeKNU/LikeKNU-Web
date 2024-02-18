import instance from './api';
import { extractBodyFromResponse } from './apiUtility';

const baseURL = '/api/menu';

export const menu = async (campus) => {
  const { data } = await instance.get(`${baseURL}`, {
    params: {
      campus: campus,
    },
  });
  console.log(data);
  return extractBodyFromResponse(data);
};
