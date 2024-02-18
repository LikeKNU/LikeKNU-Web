import styled from 'styled-components';
import colors from '../../constants/colors';
import { isDarkMode } from '../../utils/DeviceManageUtil';

export const TabList = styled.div`
  width: 100%;
  height: 34px;

  padding-right: 24px;
  padding-left: 24px;
  border-bottom: 0.5px solid ${!isDarkMode() ? colors.GRAY100 : colors.GRAY600};

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  box-sizing: border-box;

  .active {
    border-bottom: 2px solid ${!isDarkMode() ? colors.BLACK : colors.WHITE};
  }
`;
export const TabItem = styled.button`
  color: ${!isDarkMode() ? colors.BLACK : colors.WHITE};
  line-height: 34px;
  text-align: center;
  font-size: 1.6rem;
  padding-right: 8px;
  padding-left: 8px;
`;
