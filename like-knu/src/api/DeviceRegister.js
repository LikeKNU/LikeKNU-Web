import instance from "./api";
import {extractBodyFromResponse, extractMessageFromResponse} from "./ApiUtility";
import {getDeviceId} from "../utils/DeviceManageUtil";

/**
 * 기기 등록 여부
 * @returns {Promise<boolean>}
 */
export const checkDeviceRegistration = async () => {
    let deviceId = getDeviceId();
    await instance.get("/api/register", {
        params: {
            deviceId: deviceId
        }
    }).then(response => {
        const body = extractBodyFromResponse(response);
        return body.deviceRegistration;
    });
}

/**
 * 신규 기기 등록
 * @param deviceId 새로 생성한 기기 ID
 */
export const registerDevice = async (deviceId) => {
    await instance.post("/api/register", {
        deviceId: deviceId
    }).then(response => {
        let message = extractMessageFromResponse(response);
        console.log(message);
    }).catch(reason => {
        console.log(reason);
    });
};
