import styled from 'styled-components';
import colors from '../constants/colors';
import { isDarkMode } from '../utils/DeviceManageUtil';

export default styled.div`
  background-color: ${!isDarkMode() ? colors.WHITE : colors.DARK};
  padding: 0 16px;
  padding-top: 140px;
  padding-bottom: 110px;
  display: grid;
  height: 100%;
`;
