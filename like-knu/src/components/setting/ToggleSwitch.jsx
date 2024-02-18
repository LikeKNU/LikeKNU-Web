import styled from 'styled-components';
import colors from '../../constants/colors';
import { isDarkMode } from '../../utils/DeviceManageUtil';
import GlobalColor from '../styles/globalColor';

export function ToggleSwitch({ width, height, area, isTurnOn, changeHandler }) {
  return (
    <Wrapper>
      <input
        type="checkbox"
        id="toggle"
        checked={isTurnOn}
        onChange={changeHandler}
        hidden
      />
      <ToggleLabel
        htmlFor="toggle"
        className="toggle_switch"
        $width={width}
        $height={height}
      >
        <ToggleDiv className="toggle_div" $area={area} />
      </ToggleLabel>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  #toggle:checked ~ .toggle_switch {
    background: ${GlobalColor.getColor()};
  }

  #toggle:checked ~ .toggle_switch .toggle_div {
    left: calc(100% - 26px);
    background: ${!isDarkMode() ? colors.WHITE : colors.BLACK};
  }
`;

const ToggleLabel = styled.label`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  display: block;
  position: relative;
  border-radius: 30px;
  background-color: ${colors.GRAY300};
  transition: all 0.2s ease-in;
`;
const ToggleDiv = styled.div`
  width: ${(props) => props.$area};
  height: ${(props) => props.$area};
  position: absolute;
  top: 50%;
  left: 4px;
  transform: translateY(-50%);
  border-radius: 50%;
  background: ${colors.WHITE};
  transition: all 0.2s ease-in;
`;
