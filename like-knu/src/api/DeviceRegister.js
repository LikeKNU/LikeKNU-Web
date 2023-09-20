import instance from "./api";
import {extractBodyFromResponse, extractMessageFromResponse} from "./ApiUtility";
import {getDeviceId} from "../utils/DeviceManageUtil";

/**
 * 기기 등록 여부
 */
export const checkDeviceRegistration = async () => {
    try {
        let deviceId = getDeviceId();
        let response = await instance.get("/api/register", {
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
        let response = await instance.post("/api/register", {
            deviceId: deviceId
        });

        let message = extractMessageFromResponse(response);
        console.log(message);
    } catch (error) {
        console.log(error);
    }
};
