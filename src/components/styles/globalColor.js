import { campusColors } from '../../constants/colors';
import { getCampus } from '../../utils/DeviceManageUtil';

class GlobalColor {
  static color = campusColors[getCampus()];

  static getColor() {
    return this.color;
  }

  static setColor() {
    this.color = campusColors[getCampus()];
  }
}

export default GlobalColor;
