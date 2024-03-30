import { getDeviceId } from '../utils/DeviceManageUtil';
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

export const menuThumbsAPI = async (menuId) => {
  if (menuId === null || menuId === undefined) {
    return;
  }

  const { data } = await instance.get(`${baseURL}/thumbs/${menuId}`, {
    params: {
      deviceId: getDeviceId()
    }
  });
  return extractBodyFromResponse(data);
};
