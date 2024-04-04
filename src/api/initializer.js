import { CAFETERIA_ID } from '../constants/cafeteria';
import { Campus, CampusEng } from '../constants/campus';
import {
  generateAndSaveNewDeviceId,
  getCampus,
  getDeviceId,
  getPinnedCafeteria,
  getThemeColor,
  pinCafeteria,
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
  changeCafeteriaIdToName(campus, pinnedCafeteria);

  startSession(deviceId, navigator.userAgent, campus, themeColor, pinnedCafeteria);

  return campus;
}

const changeCafeteriaIdToName = (campus, pinnedCafeteria) => {
  if (Object.keys(CAFETERIA_ID[CampusEng[campus]]).includes(pinnedCafeteria)) {
    const cafeteriaName = CAFETERIA_ID[CampusEng[campus]][pinnedCafeteria];
    pinCafeteria(cafeteriaName);
  }
};

export const initializeDeviceColor = () => {
  let mode = localStorage.getItem('dark-mode');
  if (mode === null || mode === undefined) {
    localStorage.setItem('dark-mode', 'light');
  }
}
