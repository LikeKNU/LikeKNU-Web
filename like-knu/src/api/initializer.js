import { Campus } from '../constants/campus';
import {
  generateAndSaveNewDeviceId,
  getCampus,
  getDeviceId,
  getPinnedCafeteria,
  getThemeColor,
  setCampus
} from '../utils/DeviceManageUtil';
import { startSession } from './device';

export const initializeDevice = () => {
  let deviceId = getDeviceId();
  if (deviceId === null) {
    deviceId = generateAndSaveNewDeviceId();
  }

  let campus = getCampus();
  if (campus === null || campus === undefined) {
    campus = Campus.CHEONAN;
    setCampus(campus);
  }

  const themeColor = getThemeColor();
  const pinnedCafeteria = getPinnedCafeteria();

  startSession(deviceId, navigator.userAgent, campus, themeColor, pinnedCafeteria);

  return campus;
}

export function initializeDeviceColor() {
  let mode = localStorage.getItem('dark-mode');
  if (mode === null || mode === undefined) {
    localStorage.setItem('dark-mode', 'light');
  }
}
