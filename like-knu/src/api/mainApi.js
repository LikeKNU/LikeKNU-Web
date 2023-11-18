import {generateAndSaveNewDeviceId, getCampus, getDeviceId, setCampus} from "../utils/DeviceManageUtil";
import {registerDevice} from "./device";
import Campus from "../constants/campus";

export const initializeDevice = () => {
    let deviceId = getDeviceId();
    if (deviceId === null) {
        let newDeviceId = generateAndSaveNewDeviceId();
        registerDevice(newDeviceId)
            .then(() => {
            });
    }

    let campus = getCampus();
    if (campus === null || campus === undefined) {
        campus = Campus.CHEONAN;
        setCampus(campus);
    }

    return campus;
}
