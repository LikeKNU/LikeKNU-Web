import {generateAndSaveNewDeviceId, getCampus, setCampus} from "../utils/DeviceManageUtil";
import {checkDeviceRegistration, registerDevice, registerToken} from "./deviceRegister";
import Campus from "../constants/Campus";
import {requestPermission} from "../firebaseCloudMessaging";

export const initializeDevice = async () => {
    let isRegistered = await checkDeviceRegistration();
    if (!isRegistered) {
        let newDeviceId = generateAndSaveNewDeviceId();
        registerDevice(newDeviceId)
            .then(() => {
            })
            .catch(() => {
            });

        let token = await requestPermission();
        console.log(token);
        registerToken(token);
    }

    let campus = getCampus();
    if (campus === null || campus === undefined) {
        campus = Campus.CHEONAN;
        setCampus(campus);
    }
}
