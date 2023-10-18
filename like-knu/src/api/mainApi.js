import {generateAndSaveNewDeviceId, getCampus, setCampus} from "../utils/DeviceManageUtil";
import {checkDeviceRegistration, registerDevice, updateNotificationToken} from "./deviceManager";
import Campus from "../constants/Campus";

export const initializeDevice = async () => {
    let isRegistered = await checkDeviceRegistration();
    if (!isRegistered) {
        let newDeviceId = generateAndSaveNewDeviceId();
        registerDevice(newDeviceId)
            .then(() => {
            })
            .catch(() => {
            });
    }

    let campus = getCampus();
    if (campus === null || campus === undefined) {
        campus = Campus.CHEONAN;
        setCampus(campus);
    }
}
