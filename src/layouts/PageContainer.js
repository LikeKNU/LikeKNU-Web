import styled from 'styled-components';
import colors from '../constants/colors';
import { isDarkMode } from '../utils/DeviceManageUtil';

export default styled.div`
  background-color: ${!isDarkMode() ? colors.WHITE : colors.DARK_GRAY};
  padding: 178px 16px 110px;
  display: grid;
  height: 100%;
`;
