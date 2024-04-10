import styled from 'styled-components';
import colors from '../../constants/colors';
import { isDarkMode } from '../../utils/DeviceManageUtil';

const PlaceSearchBox = () => {

  return (
    <>
      <Wrapper placeholder="검색">
      </Wrapper>
    </>
  );
};

export default PlaceSearchBox;

const Wrapper = styled.input`
  z-index: 10;
  background: ${isDarkMode() ? colors.DARK_GRAY : colors.WHITE};
  border-radius: 12px;
  padding: 8px 12px;

  margin-top: 12px;
  margin-left: 12px;
  margin-right: 12px;

  outline-style: none;
  border: none;
  height: 30px;
`;
