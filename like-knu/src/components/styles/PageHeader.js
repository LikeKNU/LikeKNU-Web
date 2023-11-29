import styled from "styled-components";
import colors from "../../constants/colors";
export const PageHeader = styled.div`
  height: 65px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 16px;
  padding-left: 16px;

  color: ${colors.BLACK};
  font-size: 2.2rem;
  font-weight: 600;
`;
export const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: ${colors.WHITE};
`;
