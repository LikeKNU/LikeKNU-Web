import instance from "./api";
import {extractBodyFromResponse, extractMessageFromResponse} from "./apiUtility";
import {getDeviceId} from "../utils/DeviceManageUtil";

/**
 * 기기 등록 여부
 */
export const checkDeviceRegistration = async () => {
  try {
    let deviceId = getDeviceId();
    let { data } = await instance.get("/api/devices", {
      params: {
        deviceId: deviceId
      }
    });

    let body = extractBodyFromResponse(data);
    return body.deviceRegistration;
  } catch (error) {
    console.log(error);
  }
}

/**
 * 신규 기기 등록
 * @param deviceId 새로 생성한 기기 ID
 */
export const registerDevice = async (deviceId) => {
  try {
    let { data } = await instance.post("/api/devices", {
      deviceId: deviceId
    });

    let message = extractMessageFromResponse(data);
    console.log(message);
  } catch (error) {
    console.log(error);
  }
};

/**
 * 기기 캠퍼스 등록
 * @param deviceId 기기 ID
 * @param campus 기기에 설정된 캠퍼스
 */
export const setDeviceCampus = async (campus) => {
  console.log(campus);
  try {
    let { data } = await instance.put("/api/devices/campus", {
      deviceId: getDeviceId(),
      campus: campus
    });

    let message = extractMessageFromResponse(data);
    console.log(message);
  } catch (error) {
    console.log(error);
  }
}

export const updateNotificationToken = async (token) => {
  try {
    let { data } = await instance.post("/api/devices/token", {
      deviceId: getDeviceId(),
      token: token
    });

    let message = extractMessageFromResponse(data);
    console.log(message);
  } catch (error) {
    console.log(error);
  }
}

export const isTurnOnNotification = async () => {
  try {
    let { data } = await instance.get("/api/devices/notifications", {
      params: {
        deviceId: getDeviceId()
      }
    });

    let body = extractBodyFromResponse(data);
    return body.turnOn;
  } catch (error) {
    console.log(error);
  }
};

export const changeTurnOnNotification = async (isTurnOn) => {
  try {
    let { data } = await instance.put("/api/devices/notifications", {
      deviceId: getDeviceId(),
      notification: isTurnOn
    });

    let message = extractMessageFromResponse(data);
    console.log(message);
  } catch (error) {
    console.log(error);
  }
};
