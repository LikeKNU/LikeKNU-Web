import styled from "styled-components";
import colors from "../../constants/colors";

export function ToggleSwitch({ width, height, area }) {
  return (
    <Wrapper>
      <input type="checkbox" id="toggle" hidden />
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
    background: ${colors.common};
  }

  #toggle:checked ~ .toggle_switch .toggle_div {
    left: calc(100% - 26px);
    background: ${colors.white};
  }
`;

const ToggleLabel = styled.label`
  width: ${(props) => props.$width}; //100
  height: ${(props) => props.$height};
  display: block;
  position: relative;
  border-radius: 30px;
  background-color: ${colors.gray300};
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
  background: ${colors.white};
  transition: all 0.2s ease-in;
`;
