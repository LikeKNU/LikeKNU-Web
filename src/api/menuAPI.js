import { getDeviceId } from '../utils/DeviceManageUtil';
import instance from './api';
import { extractBodyFromResponse } from './apiUtility';

const baseURL = '/api/menus';

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

  const { data } = await instance.get(`${baseURL}/${menuId}/thumbs`, {
    params: {
      deviceId: getDeviceId()
    }
  });
  return extractBodyFromResponse(data);
};

export const updateMenuThumbsAPI = async (menuId, thumbsType) => {
  if (menuId === null || menuId === undefined) {
    return;
  }

  const { data } = await instance.put(`${baseURL}/${menuId}/thumbs`, {
    deviceId: getDeviceId(),
    thumbsType: thumbsType
  });
  return extractBodyFromResponse(data);
}
