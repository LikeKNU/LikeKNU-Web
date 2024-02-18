import { Campus } from '../constants/campus';
import { generateAndSaveNewDeviceId, getCampus, getDeviceId, isDarkMode, setCampus } from '../utils/DeviceManageUtil';
import { startSession } from './device';

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

  if (isDarkMode()) {
    if (detectDarkMode()) {
      localStorage.setItem('dark-mode', 'dark');
      document.body.setAttribute('data-theme', 'dark');
    } else {
      localStorage.setItem('dark-mode', 'light');
      document.body.setAttribute('data-theme', 'light');
    }
  }

  return campus;
}

function detectDarkMode() {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}
