import instance from './api';
import { extractBodyFromResponse } from './apiUtility';

const baseURL = '/api/menu';

export const menuAPI = async (campus, cafeteriaName) => {
  if (cafeteriaName === undefined) {
    return;
  }

  const { data } = await instance.get(`${baseURL}`, {
    params: {
      campus: campus,
      cafeteriaName: cafeteriaName
    },
  });
  return extractBodyFromResponse(data);
};
