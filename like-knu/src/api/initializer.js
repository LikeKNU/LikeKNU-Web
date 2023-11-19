import {generateAndSaveNewDeviceId, getCampus, getDeviceId, setCampus} from "../utils/DeviceManageUtil";
import {registerDevice} from "./device";
import Campus from "../constants/campus";

export const initializeDevice = () => {
  let deviceId = getDeviceId();
  if (deviceId === null) {
    deviceId = generateAndSaveNewDeviceId();
  }
  registerDevice(deviceId)
    .then(() => {
    });

  let campus = getCampus();
  if (campus === null || campus === undefined) {
    campus = Campus.CHEONAN;
    setCampus(campus);
  }

  return campus;
}
