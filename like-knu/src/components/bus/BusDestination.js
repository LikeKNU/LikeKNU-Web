import styled from 'styled-components';
import colors from '../../constants/colors';
import { isDarkMode } from '../../utils/DeviceManageUtil';

export const BusDestination = styled.button`
  background-color: ${!isDarkMode() ? colors.WHITE : colors.DARK};
  width: 100px;
  height: 30px;
  font-size: 1.5rem;
  font-weight: 600;
  border: 1px solid ${!isDarkMode() ? colors.GRAY200 : colors.GRAY600};
  border-radius: 6px;
  color: ${!isDarkMode() ? colors.GRAY400 : colors.GRAY300};
  margin-right: 10px;

  &&.active {
    background-color: ${(props) => props.$campus};
    color: ${colors.WHITE};
    border: 0;
  }
`;
