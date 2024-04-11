import styled from 'styled-components';
import { ReactComponent as Crosshair } from '../../../assets/icon/crosshair.svg';
import colors from '../../../constants/colors';
import { isDarkMode } from '../../../utils/DeviceManageUtil';

const MyLocationButton = ({ handleOnClick, isMyLocation }) => {
  return (
    <>
      <Wrapper onClick={handleOnClick}>
        <StyledCrosshair isMyLocation={isMyLocation} />
      </Wrapper>
    </>
  );
};

export default MyLocationButton;

const Wrapper = styled.div`
  z-index: 10;
  position: fixed;
  bottom: 50px;
  right: 30px;

  width: 60px;
  height: 60px;
  border-radius: 24px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${isDarkMode() ? colors.DARK_GRAY : colors.WHITE};

  box-shadow: 2px 4px 4px rgba(80, 80, 80, 0.1);
`;

const StyledCrosshair = styled(Crosshair)`
  width: 24px;
  height: 24px;
  fill: ${(props) => props.isMyLocation ? colors.CHEONAN : isDarkMode() ? colors.DARK_WHITE : colors.BLACK};
`;
