import instance from "./api";
import {extractBodyFromResponse, extractMessageFromResponse} from "./apiUtility";
import {getDeviceId} from "../utils/DeviceManageUtil";

/**
 * 기기 등록 여부
 */
export const checkDeviceRegistration = async () => {
    try {
        let deviceId = getDeviceId();
        let response = await instance.get("/api/devices", {
            params: {
                deviceId: deviceId
            }
        });

        let body = extractBodyFromResponse(response);
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
        let response = await instance.post("/api/devices", {
            deviceId: deviceId
        });

        let message = extractMessageFromResponse(response);
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
export const setDeviceCampus = async (deviceId, campus) => {
    try {
        let response = await instance.post("/api/devices/campus", {
            deviceId: deviceId,
            campus: campus
        });

        let message = extractMessageFromResponse(response);
        console.log(message);
    } catch (error) {
        console.log(error);
    }
}
