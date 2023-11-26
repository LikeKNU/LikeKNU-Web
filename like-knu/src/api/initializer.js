import {generateAndSaveNewDeviceId, getCampus, getDeviceId, setCampus} from "../utils/DeviceManageUtil";
import {startSession} from "./device";
import { Campus } from "../constants/campus";

export const initializeDevice = () => {
  let deviceId = getDeviceId();
  if (deviceId === null) {
    deviceId = generateAndSaveNewDeviceId();
  }
  startSession(deviceId, navigator.userAgent);

  let campus = getCampus();
  if (campus === null || campus === undefined) {
    campus = Campus.CHEONAN;
    setCampus(campus);
  }

  return campus;
}
