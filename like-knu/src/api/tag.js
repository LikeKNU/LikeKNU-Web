import instance from "./api";
import { getDeviceId } from "../utils/DeviceManageUtil";
import { extractBodyFromResponse } from "./apiUtility";

const baseURL = "/api/devices/subscribes";

export const putTag = async (data) => {
  try {
    await instance.put(`${baseURL}`, data);
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
