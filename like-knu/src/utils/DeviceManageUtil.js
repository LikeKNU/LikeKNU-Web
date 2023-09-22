import {v4 as uuidv4} from 'uuid';

const deviceIdKey = "device_id";
const campusKey = "campus";

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
