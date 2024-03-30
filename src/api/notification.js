import { getDeviceId } from '../utils/DeviceManageUtil';
import instance from './api';

const endpointPrefix = '/api/notifications';

export const fetchNotifications = async (page) => {
  const { data } = await instance.get(`${endpointPrefix}`, {
    params: {
      deviceId: getDeviceId(),
      page: page
    }
  });
  return data.data;
}
