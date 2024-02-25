import { v4 as uuidv4 } from 'uuid';

const deviceIdKey = 'device_id';
const campusKey = 'campus';
const darkModeKey = 'dark-mode';
const pinCafeteriaKey = 'pin-cafeteria';

export const getDeviceId = () => {
  return localStorage.getItem(deviceIdKey)
};

export const generateAndSaveNewDeviceId = () => {
  const uuid = uuidv4();
  localStorage.setItem(deviceIdKey, uuid);
  return uuid;
};

export const getCampus = () => {
  return localStorage.getItem(campusKey);
};

export const setCampus = (campus) => {
  localStorage.setItem(campusKey, campus);
};

export const changeDarkMode = () => {
  if (isDarkMode()) {
    localStorage.setItem(darkModeKey, 'light');
    document.body.setAttribute('data-theme', 'dark');
  } else {
    localStorage.setItem(darkModeKey, 'dark');
    document.body.setAttribute('data-theme', 'light');
  }
};

export const isDarkMode = () => {
  let darkMode = localStorage.getItem(darkModeKey);
  return darkMode === 'dark';
};

export const getPinnedCafeteria = () => {
  return localStorage.getItem(pinCafeteriaKey);
};

export const pinCafeteria = (cafeteriaId) => {
  localStorage.setItem(pinCafeteriaKey, cafeteriaId);
};
