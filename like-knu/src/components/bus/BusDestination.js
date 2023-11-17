import styled from "styled-components";
import colors from "../../constants/colors";
import GlobalColor from "../styles/globalColor";
export const BusDestination = styled.button`
  background-color: ${colors.WHITE};
  width: 120px;
  height: 30px;
  font-size: 1.6rem;
  font-weight: 600;
  border: 1px solid ${colors.GRAY200};
  border-radius: 6px;
  color: ${colors.GRAY400};
  margin-right: 10px;

  &&.active {
    background-color: ${(props) => props.$campus};
    color: ${colors.WHITE};
    border: 0;
  }
`;
