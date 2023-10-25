import instance from "./api";
import {getDeviceId} from "../utils/DeviceManageUtil";

const endpointPrefix = "/api/notifications";

export const fetchNotifications = async (page) => {
  const response = await instance.get(`${endpointPrefix}`, {
    params: {
      deviceId: getDeviceId(),
      page: page
    }
  });
  return response.data;
}
