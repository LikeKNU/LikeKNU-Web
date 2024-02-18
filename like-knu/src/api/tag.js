import { getDeviceId } from '../utils/DeviceManageUtil';
import instance from './api';
import { extractBodyFromResponse } from './apiUtility';

const baseURL = '/api/devices/subscribes';

export const putTag = async (tags) => {
  try {
    await instance.put(`${baseURL}`, {
      deviceId: getDeviceId(),
      tags: tags,
    });
  } catch (error) {
    console.log(error);
  }
};

export const tags = async () => {
  try {
    const { data } = await instance.get(`${baseURL}`, {
      params: {
        deviceId: getDeviceId(),
      },
    });
    console.log(data);
    return extractBodyFromResponse(data);
  } catch (error) {
    console.log(error);
  }
};
