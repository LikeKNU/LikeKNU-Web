import colors from 'constants/colors';
import styled from 'styled-components';
import { isDarkMode } from '../../utils/DeviceManageUtil';

export default styled.div`
  background-color: ${!isDarkMode() ? colors.WHITE : colors.DARK_GRAY};
  border-radius: 2rem;
  padding: 0 2rem 1.6rem 2rem;
  display: flex;
  flex-direction: column;
  box-shadow: ${!isDarkMode() ? '0 0 16px 0 #f0f0f0' : 'none'};
`;

// border: 1px solid ${colors.gray100};
