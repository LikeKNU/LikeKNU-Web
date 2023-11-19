import instance from "./api";
import {getDeviceId} from "../utils/DeviceManageUtil";

const baseURL = "/api/devices/subscribes";

export const putTag = async (tags) => {
  try {
    await instance.put(`${baseURL}`, {
      deviceId: getDeviceId(),
      tags: tags
    });
  } catch (error) {
    console.log(error);
  }
};
