import styled from "styled-components";
import colors from "../../constants/colors";
export default styled.label`
  width: auto;
  height: 26px;
  padding: 5px 0;
  border-radius: 13px;

  font-size: 15px;
  font-weight: 600;

  background-color: ${colors.GRAY100};
  color: ${colors.GRAY400};

  display: flex;
  justify-content: center;
  align-items: center;
`;
